import { useState, useEffect } from 'react'
import './App.css'

const DIFFICULTIES = {
  easy: { pairs: 6, guesses: 15 },
  medium: { pairs: 8, guesses: 20 },
  hard: { pairs: 10, guesses: 25 }
}

const CARD_SYMBOLS = ['🎮', '🎯', '🎲', '🎨', '🎭', '🎪', '🎸', '🎹', '🎺', '🎻']

function App() {
  const [difficulty, setDifficulty] = useState(null)
  const [cards, setCards] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedPairs, setMatchedPairs] = useState([])
  const [guessesRemaining, setGuessesRemaining] = useState(0)
  const [gameStatus, setGameStatus] = useState('setup') // setup, playing, won, lost

  const initializeGame = (diff) => {
    const { pairs, guesses } = DIFFICULTIES[diff]
    const symbols = CARD_SYMBOLS.slice(0, pairs)
    const cardPairs = [...symbols, ...symbols]
    const shuffled = cardPairs
      .map((symbol, index) => ({ id: index, symbol }))
      .sort(() => Math.random() - 0.5)
    
    setDifficulty(diff)
    setCards(shuffled)
    setFlippedCards([])
    setMatchedPairs([])
    setGuessesRemaining(guesses)
    setGameStatus('playing')
  }

  const handleCardClick = (card) => {
    if (gameStatus !== 'playing') return
    if (flippedCards.length === 2) return
    if (flippedCards.includes(card.id)) return
    if (matchedPairs.includes(card.symbol)) return

    const newFlipped = [...flippedCards, card.id]
    setFlippedCards(newFlipped)

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard.symbol === secondCard.symbol) {
        setMatchedPairs([...matchedPairs, firstCard.symbol])
        setFlippedCards([])
      } else {
        setGuessesRemaining(guessesRemaining - 1)
        setTimeout(() => setFlippedCards([]), 1000)
      }
    }
  }

  useEffect(() => {
    if (gameStatus === 'playing') {
      if (matchedPairs.length === DIFFICULTIES[difficulty].pairs) {
        setGameStatus('won')
      } else if (guessesRemaining === 0) {
        setGameStatus('lost')
      }
    }
  }, [matchedPairs, guessesRemaining, gameStatus, difficulty])

  const isCardFlipped = (card) => {
    return flippedCards.includes(card.id) || matchedPairs.includes(card.symbol)
  }

  const resetGame = () => {
    setDifficulty(null)
    setGameStatus('setup')
  }

  if (gameStatus === 'setup') {
    return (
      <div className="game-container">
        <h1>Memory Card Game</h1>
        <div className="difficulty-selector">
          <h2>Select Difficulty</h2>
          <div className="difficulty-buttons">
            <button onClick={() => initializeGame('easy')} className="difficulty-btn easy">
              Easy
              <span>6 pairs - 15 guesses</span>
            </button>
            <button onClick={() => initializeGame('medium')} className="difficulty-btn medium">
              Medium
              <span>8 pairs - 20 guesses</span>
            </button>
            <button onClick={() => initializeGame('hard')} className="difficulty-btn hard">
              Hard
              <span>10 pairs - 25 guesses</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="game-container">
      <h1>Memory Card Game</h1>
      
      <div className="game-stats">
        <div className="stat">
          <span className="stat-label">Difficulty:</span>
          <span className="stat-value">{difficulty}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Guesses Remaining:</span>
          <span className="stat-value">{guessesRemaining}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Matches:</span>
          <span className="stat-value">{matchedPairs.length}/{DIFFICULTIES[difficulty].pairs}</span>
        </div>
      </div>

      {(gameStatus === 'won' || gameStatus === 'lost') && (
        <div className={`game-message ${gameStatus}`}>
          <h2>{gameStatus === 'won' ? '🎉 You Won!' : '😢 Game Over!'}</h2>
          <p>
            {gameStatus === 'won' 
              ? `You matched all pairs with ${guessesRemaining} guesses remaining!`
              : 'You ran out of guesses. Try again!'}
          </p>
          <button onClick={resetGame} className="reset-btn">
            Play Again
          </button>
        </div>
      )}

      <div className={`card-grid grid-${difficulty}`}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`memory-card ${isCardFlipped(card) ? 'flipped' : ''} ${
              matchedPairs.includes(card.symbol) ? 'matched' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card.symbol}</div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={resetGame} className="new-game-btn">
        New Game
      </button>
    </div>
  )
}

export default App
