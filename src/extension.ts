import * as vscode from 'vscode';
import { BlackjackPanel } from './BlackjackPanel';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('blackjack.playGame', () => {
		BlackjackPanel.createOrShow(context.extensionUri);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
