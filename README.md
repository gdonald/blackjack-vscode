# Blackjack for VS Code

Play Blackjack directly in your Visual Studio Code editor!

## Development Setup

### Prerequisites

- Node.js (v20 or higher)
- Visual Studio Code
- npm

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Available Commands

#### Build & Development

- **`npm run compile`** - Compile the extension (runs type checking, linting, and builds)
- **`npm run watch`** - Watch mode for development (auto-recompiles on file changes)
- **`npm run lint`** - Run ESLint on source files
- **`npm run check-types`** - Run TypeScript type checking without emitting files

#### Testing

- **`npm test`** - Run all tests
- **`npm run compile-tests`** - Compile test files
- **`npm run watch-tests`** - Watch mode for tests

#### Packaging

- **`npm run package`** - Create production build (runs checks and optimizes)
- **`npx vsce package --no-yarn --baseContentUrl https://github.com/placeholder --baseImagesUrl https://github.com/placeholder --allow-missing-repository`** - Package extension as .vsix file
- **`code --install-extension blackjack-0.0.1.vsix`** - Install the packaged extension

### Running the Extension

1. Open this project in VS Code
2. Press **F5** to launch the Extension Development Host (a new VS Code window)
3. In the Extension Development Host window:
   - Open Command Palette: **Cmd+Shift+P** (Mac) or **Ctrl+Shift+P** (Windows/Linux)
   - Run: **"Hello World"** command
   - You should see a message: "Hello World from Blackjack!"

### Project Structure

```
.
├── src/
│   ├── extension.ts          # Extension entry point
│   └── test/                 # Test files
├── dist/                     # Compiled output (generated)
├── package.json              # Extension manifest
├── tsconfig.json             # TypeScript configuration
├── esbuild.js                # Build configuration
└── ROADMAP.md               # Development roadmap
```

### Key Files

- **[package.json](package.json)** - Extension manifest defining commands, activation events, and metadata
- **[src/extension.ts](src/extension.ts)** - Main extension code with `activate()` and `deactivate()` functions
- **[tsconfig.json](tsconfig.json)** - TypeScript compiler configuration
- **[esbuild.js](esbuild.js)** - esbuild bundler configuration

### Debugging

VS Code's built-in debugger is configured and ready to use:

1. Set breakpoints in your TypeScript files
2. Press **F5** to start debugging
3. The extension will run in a new Extension Development Host window
4. Breakpoints will be hit when you trigger commands

