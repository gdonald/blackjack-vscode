import * as vscode from 'vscode';
import { WebviewMessage, GameState } from './shared/messages';

export class BlackjackPanel {
	public static currentPanel: BlackjackPanel | undefined;
	public static readonly viewType = 'blackjackPanel';

	private readonly _panel: vscode.WebviewPanel;
	private readonly _extensionUri: vscode.Uri;
	private readonly _context: vscode.ExtensionContext;
	private _disposables: vscode.Disposable[] = [];

	public static createOrShow(extensionUri: vscode.Uri, context: vscode.ExtensionContext) {
		const column = vscode.window.activeTextEditor
			? vscode.window.activeTextEditor.viewColumn
			: undefined;

		if (BlackjackPanel.currentPanel) {
			BlackjackPanel.currentPanel._panel.reveal(column);
			return;
		}

		const panel = vscode.window.createWebviewPanel(
			BlackjackPanel.viewType,
			'Blackjack',
			column || vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
			}
		);

		BlackjackPanel.currentPanel = new BlackjackPanel(panel, extensionUri, context);
	}

	private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri, context: vscode.ExtensionContext) {
		this._panel = panel;
		this._extensionUri = extensionUri;
		this._context = context;

		this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

		this._panel.webview.html = this._getHtmlForWebview();

		this._panel.webview.onDidReceiveMessage(
			(message: WebviewMessage) => {
				this._handleMessage(message);
			},
			null,
			this._disposables
		);

		this._sendInitialState();
	}

	private _handleMessage(message: WebviewMessage) {
		switch (message.type) {
			case 'SAVE_STATE':
				this._context.globalState.update('blackjackGameState', message.state);
				break;
			case 'LOAD_STATE':
				const state = this._context.globalState.get<GameState>('blackjackGameState');
				this._panel.webview.postMessage({
					type: 'STATE_RESPONSE',
					state: state || null
				});
				break;
		}
	}

	private _sendInitialState() {
		const state = this._context.globalState.get<GameState>('blackjackGameState');
		this._panel.webview.postMessage({
			type: 'STATE_RESPONSE',
			state: state || null
		});
	}

	public dispose() {
		BlackjackPanel.currentPanel = undefined;

		this._panel.dispose();

		while (this._disposables.length) {
			const disposable = this._disposables.pop();
			if (disposable) {
				disposable.dispose();
			}
		}
	}

	private _getHtmlForWebview() {
		const webview = this._panel.webview;

		const scriptUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.js')
		);

		const styleUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'dist', 'webview.css')
		);

		const nonce = this._getNonce();

		return `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:;">
			<link href="${styleUri}" rel="stylesheet">
			<title>Blackjack</title>
		</head>
		<body>
			<div id="root"></div>
			<script nonce="${nonce}" src="${scriptUri}"></script>
		</body>
		</html>`;
	}

	private _getNonce() {
		let text = '';
		const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		for (let i = 0; i < 32; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	}
}
