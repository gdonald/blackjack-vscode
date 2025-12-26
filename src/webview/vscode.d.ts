import { ExtensionMessage, WebviewMessage } from '../shared/messages';

export interface VsCodeApi {
	postMessage(message: WebviewMessage): void
	getState(): unknown
	setState(state: unknown): void
}

declare global {
	function acquireVsCodeApi(): VsCodeApi
}
