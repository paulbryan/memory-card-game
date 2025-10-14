# Memory Card Game

A classic memory matching game built with React and Vite. Flip cards to find matching pairs before you run out of guesses!

## Features

- **Three Difficulty Levels**:
  - Easy: 6 pairs with 15 guesses
  - Medium: 8 pairs with 20 guesses
  - Hard: 10 pairs with 25 guesses

- **Smooth Animations**: Card flip animations and match celebrations
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Matched cards turn green, unmatched cards flip back
- **Game Statistics**: Track your difficulty, remaining guesses, and matches

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How to Play

1. Select a difficulty level to start the game
2. Click on any card to flip it and reveal the symbol
3. Click on a second card to try to find a match
4. If the cards match, they stay flipped and turn green
5. If they don't match, they flip back and you lose a guess
6. Match all pairs before running out of guesses to win!

## Technologies Used

- React 19
- Vite 7
- CSS3 with animations
- ESLint for code quality
