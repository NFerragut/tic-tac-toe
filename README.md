# React Tic-Tac-Toe

A classic tic-tac-toe game built with React, following the official [React tutorial](https://react.dev/learn/tutorial-tic-tac-toe) with all 5 suggested improvements implemented.

## Features

### Core Game

- Interactive 3x3 tic-tac-toe board
- Alternating turns between X and O players
- Win detection with game status display
- Draw detection when board is full
- Move history with time travel functionality

### Enhanced Features (Tutorial Improvements)

1. **Current Move Display** - Shows "You are at move #X" for the current position instead of a clickable button
2. **Board Generation with Loops** - Uses nested loops to render the 3x3 board instead of hardcoded squares
3. **Move History Toggle** - Button to sort move history in ascending or descending order
4. **Winning Square Highlighting** - Winning squares are highlighted with yellow background and red text
5. **Move Coordinates** - Move history shows the exact position of each move (e.g., "X@(1,2)")

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm start
```

The game will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## How to Play

1. Click any empty square to place your mark (X or O)
2. Players alternate turns automatically
3. First player to get three marks in a row (horizontally, vertically, or diagonally) wins
4. Use the move history to jump back to any previous game state
5. Toggle the "Reverse Order" button to change how moves are displayed

## Project Structure

```dir
src/
├── App.js          # Main game component with all logic
├── index.js        # React app entry point
└── styles.css      # Game styling and layout
```

## Implementation Details

- **State Management**: Uses React hooks (useState) for game state
- **Component Structure**: Modular design with Square, Board, and Game components
- **Win Detection**: Efficient algorithm checking all possible winning combinations
- **Move Tracking**: Calculates coordinates by comparing board states between moves
- **Responsive Design**: Clean CSS layout with highlighted winning squares

## Technologies Used

- React 18
- Create React App
- Modern JavaScript (ES6+)
- CSS3

## Author

NFerragut

---

*This project demonstrates fundamental React concepts including components, props, state management, and event handling while implementing a complete interactive game experience.*
