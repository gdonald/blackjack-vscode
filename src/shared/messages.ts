export interface GameState {
	money: number
	currentBet: number
	numDecks: number
	shoeType: number
}

export interface SaveStateMessage {
	type: 'SAVE_STATE'
	state: GameState
}

export interface LoadStateMessage {
	type: 'LOAD_STATE'
}

export interface StateResponseMessage {
	type: 'STATE_RESPONSE'
	state: GameState | null
}

export type WebviewMessage = SaveStateMessage | LoadStateMessage
export type ExtensionMessage = StateResponseMessage
