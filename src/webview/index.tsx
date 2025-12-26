import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
	return (
		<div>
			<h1>Blackjack Game</h1>
			<p>Game interface will be loaded here.</p>
		</div>
	);
};

const container = document.getElementById('root');
if (container) {
	const root = createRoot(container);
	root.render(<App />);
}
