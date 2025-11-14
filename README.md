# Memory Card Game

A classic memory matching game built with React and Vite. Flip cards to find matching pairs before you run out of guesses!

## Screenshots

### Difficulty Selection
![Difficulty Selection](https://github.com/user-attachments/assets/888efe3a-5b0b-49f3-99a3-b0cfbbb076bb)

### Game Start
![Game Start](https://github.com/user-attachments/assets/6aa62dbf-3cfa-42e8-859e-9733e9fa2ca0)

### Gameplay with Matched Cards
![Gameplay with Match](https://github.com/user-attachments/assets/45c4a5d5-dd54-4575-8f62-e2a88d44931a)

### Winning State
![Game Won](https://github.com/user-attachments/assets/583533de-eb51-4c01-b2af-9fe3ea1f9f64)

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
