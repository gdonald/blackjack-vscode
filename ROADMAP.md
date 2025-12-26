# Blackjack VSCode Extension - Development Roadmap

DO NOT modify or directly reference any code files from inside blackjack-js in the new implementation.  Code from blackjack-js can be used but must be copied out of there, so at the end blackjack-js can be deleted.  

## 1. Project Setup & Scaffolding
- [ ] 1.1 Generate VSCode extension scaffold using `yo code`
  - [ ] 1.1.1 Choose TypeScript as language
  - [ ] 1.1.2 Name extension "blackjack-vscode"
  - [ ] 1.1.3 Set up initial configuration
- [ ] 1.2 Review generated extension structure
  - [ ] 1.2.1 Understand `extension.ts` entry point
  - [ ] 1.2.2 Review `package.json` manifest
  - [ ] 1.2.3 Check `tsconfig.json` configuration
- [ ] 1.3 Test basic extension functionality
  - [ ] 1.3.1 Press F5 to launch Extension Development Host
  - [ ] 1.3.2 Run default "Hello World" command
  - [ ] 1.3.3 Verify extension activates correctly

## 2. Webview Infrastructure
- [ ] 2.1 Create webview provider class
  - [ ] 2.1.1 Add `BlackjackPanel.ts` file
  - [ ] 2.1.2 Implement singleton pattern for panel management
  - [ ] 2.1.3 Add `createOrShow()` method
  - [ ] 2.1.4 Add `dispose()` cleanup method
- [ ] 2.2 Implement webview HTML generation
  - [ ] 2.2.1 Create method to generate webview HTML structure
  - [ ] 2.2.2 Add CSP (Content Security Policy) meta tags
  - [ ] 2.2.3 Set up script and style loading
- [ ] 2.3 Register activation command
  - [ ] 2.3.1 Update `package.json` to add "Play Blackjack" command
  - [ ] 2.3.2 Set activation event in `package.json`
  - [ ] 2.3.3 Wire command to webview creation in `extension.ts`
- [ ] 2.4 Test webview creation
  - [ ] 2.4.1 Open command palette
  - [ ] 2.4.2 Run "Play Blackjack" command
  - [ ] 2.4.3 Verify empty webview panel opens

## 3. Build System Setup
- [ ] 3.1 Configure React build for webview
  - [ ] 3.1.1 Create separate `tsconfig.webview.json` for React code
  - [ ] 3.1.2 Install necessary dependencies (React, ReactDOM, types)
  - [ ] 3.1.3 Configure build output directory
- [ ] 3.2 Set up bundler for webview
  - [ ] 3.2.1 Install esbuild or webpack
  - [ ] 3.2.2 Create build script for React app
  - [ ] 3.2.3 Configure separate entry point for webview
  - [ ] 3.2.4 Set up source maps for debugging
- [ ] 3.3 Update VSCode extension build
  - [ ] 3.3.1 Modify extension's `tsconfig.json` if needed
  - [ ] 3.3.2 Update build scripts in `package.json`
  - [ ] 3.3.3 Configure output paths for both extension and webview
- [ ] 3.4 Test build process
  - [ ] 3.4.1 Run build command
  - [ ] 3.4.2 Verify both extension and webview bundles are created
  - [ ] 3.4.3 Check output file sizes and structure

## 4. Copy Blackjack Game Code
- [ ] 4.1 Copy game logic classes
  - [ ] 4.1.1 Copy `lib/Hand.ts` to extension
  - [ ] 4.1.2 Copy `lib/Shoe.ts` to extension
  - [ ] 4.1.3 Create `src/webview/lib/` directory structure
- [ ] 4.2 Copy React components
  - [ ] 4.2.1 Copy all component files from `blackjack-js/src/components/`
  - [ ] 4.2.2 Maintain directory structure (menus subfolder)
  - [ ] 4.2.3 Copy `Card.tsx`, `Game.tsx`, `DealerHand.tsx`, `PlayerHand.tsx`
  - [ ] 4.2.4 Copy all menu components
- [ ] 4.3 Copy assets and styles
  - [ ] 4.3.1 Copy `index.css` if exists
  - [ ] 4.3.2 Copy any card images or assets
  - [ ] 4.3.3 Copy Bootstrap dependency reference
- [ ] 4.4 Create webview entry point
  - [ ] 4.4.1 Create `src/webview/index.tsx`
  - [ ] 4.4.2 Set up React root rendering
  - [ ] 4.4.3 Import and render Game component

## 5. Adapt Code for VSCode Environment
- [ ] 5.1 Update asset loading paths
  - [ ] 5.1.1 Use VSCode webview URI scheme for resources
  - [ ] 5.1.2 Update CSS/image paths to use webview URIs
  - [ ] 5.1.3 Test that all resources load correctly
- [ ] 5.2 Remove web-specific dependencies
  - [ ] 5.2.1 Remove `react-cookie` dependency
  - [ ] 5.2.2 Remove `ForkMe` component (GitHub ribbon)
  - [ ] 5.2.3 Update imports in affected files
- [ ] 5.3 Implement VSCode state persistence
  - [ ] 5.3.1 Create message passing system between webview and extension
  - [ ] 5.3.2 Add `saveGame()` implementation using postMessage
  - [ ] 5.3.3 Add `loadGame()` implementation using extension context
  - [ ] 5.3.4 Wire up state persistence in extension host
- [ ] 5.4 Handle CSP restrictions
  - [ ] 5.4.1 Ensure no inline scripts
  - [ ] 5.4.2 Ensure no inline styles (if Bootstrap uses them)
  - [ ] 5.4.3 Add nonces for script tags if needed

## 6. State Management Integration
- [ ] 6.1 Create message protocol
  - [ ] 6.1.1 Define message types (SAVE_STATE, LOAD_STATE)
  - [ ] 6.1.2 Create TypeScript interfaces for messages
  - [ ] 6.1.3 Document message format
- [ ] 6.2 Implement extension-side state handler
  - [ ] 6.2.1 Add message listener in webview panel
  - [ ] 6.2.2 Implement state save to `globalState`
  - [ ] 6.2.3 Implement state load from `globalState`
  - [ ] 6.2.4 Send initial state to webview on creation
- [ ] 6.3 Implement webview-side state handler
  - [ ] 6.3.1 Add VS Code API acquisition in webview
  - [ ] 6.3.2 Update `Game.saveGame()` to post message
  - [ ] 6.3.3 Update `Game.loadGame()` to request state
  - [ ] 6.3.4 Handle state initialization on webview load
- [ ] 6.4 Test state persistence
  - [ ] 6.4.1 Play game and make changes
  - [ ] 6.4.2 Close webview panel
  - [ ] 6.4.3 Reopen and verify state restored

## 7. Styling and UI Polish
- [ ] 7.1 Bundle Bootstrap CSS
  - [ ] 7.1.1 Include Bootstrap in webview bundle
  - [ ] 7.1.2 Verify styles load correctly
  - [ ] 7.1.3 Test responsive layout
- [ ] 7.2 Add VSCode theme integration
  - [ ] 7.2.1 Detect VSCode theme (light/dark)
  - [ ] 7.2.2 Adjust game colors to match theme
  - [ ] 7.2.3 Test in both light and dark modes
- [ ] 7.3 Optimize webview layout
  - [ ] 7.3.1 Ensure proper sizing within VSCode panel
  - [ ] 7.3.2 Test different panel sizes
  - [ ] 7.3.3 Add scrolling if needed
- [ ] 7.4 Add extension icon
  - [ ] 7.4.1 Create or find blackjack-themed icon
  - [ ] 7.4.2 Add icon files to project
  - [ ] 7.4.3 Reference in `package.json`

## 8. Testing and Debugging
- [ ] 8.1 Test all game features
  - [ ] 8.1.1 Test dealing cards
  - [ ] 8.1.2 Test hit, stand, double down, split
  - [ ] 8.1.3 Test insurance
  - [ ] 8.1.4 Test betting system
  - [ ] 8.1.5 Test deck options
- [ ] 8.2 Test edge cases
  - [ ] 8.2.1 Test running out of money
  - [ ] 8.2.2 Test maximum bet
  - [ ] 8.2.3 Test shoe shuffling
  - [ ] 8.2.4 Test blackjack payouts
- [ ] 8.3 Debug any issues
  - [ ] 8.3.1 Fix any console errors
  - [ ] 8.3.2 Fix any state persistence issues
  - [ ] 8.3.3 Fix any rendering issues
- [ ] 8.4 Test in Extension Development Host
  - [ ] 8.4.1 Launch extension in debug mode
  - [ ] 8.4.2 Test all functionality
  - [ ] 8.4.3 Check for performance issues

## 9. Documentation and Polish
- [ ] 9.1 Update README.md
  - [ ] 9.1.1 Add description of VSCode extension
  - [ ] 9.1.2 Add installation instructions
  - [ ] 9.1.3 Add usage instructions with screenshots
  - [ ] 9.1.4 Add features list
- [ ] 9.2 Add CHANGELOG.md
  - [ ] 9.2.1 Document version 0.0.1 initial release
  - [ ] 9.2.2 List all features
- [ ] 9.3 Review package.json metadata
  - [ ] 9.3.1 Set appropriate version
  - [ ] 9.3.2 Add description, author, license
  - [ ] 9.3.3 Add repository URL
  - [ ] 9.3.4 Add keywords for marketplace
  - [ ] 9.3.5 Set categories
- [ ] 9.4 Add extension configuration (if needed)
  - [ ] 9.4.1 Add settings for starting money
  - [ ] 9.4.2 Add settings for default bet
  - [ ] 9.4.3 Add settings for number of decks

## 10. Package and Publish
- [ ] 10.1 Prepare for packaging
  - [ ] 10.1.1 Clean up unused files
  - [ ] 10.1.2 Optimize bundle sizes
  - [ ] 10.1.3 Review .vscodeignore file
- [ ] 10.2 Create VSIX package
  - [ ] 10.2.1 Install vsce CLI tool
  - [ ] 10.2.2 Run `vsce package`
  - [ ] 10.2.3 Test installing VSIX locally
- [ ] 10.3 Test packaged extension
  - [ ] 10.3.1 Install from VSIX file
  - [ ] 10.3.2 Test all functionality
  - [ ] 10.3.3 Verify assets load correctly
- [ ] 10.4 Publish to marketplace (optional)
  - [ ] 10.4.1 Create publisher account
  - [ ] 10.4.2 Generate personal access token
  - [ ] 10.4.3 Run `vsce publish`
  - [ ] 10.4.4 Verify listing on marketplace

## 11. Future Enhancements (Optional)
- [ ] 11.1 Add statistics tracking
  - [ ] 11.1.1 Track win/loss ratio
  - [ ] 11.1.2 Track total hands played
  - [ ] 11.1.3 Display statistics panel
- [ ] 11.2 Add achievements system
  - [ ] 11.2.1 Define achievement criteria
  - [ ] 11.2.2 Implement tracking
  - [ ] 11.2.3 Show achievement notifications
- [ ] 11.3 Add sound effects
  - [ ] 11.3.1 Find/create card dealing sounds
  - [ ] 11.3.2 Add win/loss sounds
  - [ ] 11.3.3 Make sounds configurable
- [ ] 11.4 Add multiplayer support
  - [ ] 11.4.1 Research collaboration API
  - [ ] 11.4.2 Design multiplayer protocol
  - [ ] 11.4.3 Implement shared game state
