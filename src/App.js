import { useState } from 'react'

function Square({ value, onSquareClick, isWinner }) {
  const classname = (isWinner ? 'square winner' : 'square')
  return (
    <button className={classname} onClick={onSquareClick}>{value}</button>
  )
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const [_, winner] = getWinningSquares(squares)
    if (squares[i] || winner) {
      return
    }
    const nextSquares = squares.slice()
    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  }

  const [win_squares, winner] = getWinningSquares(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else if (squares.includes(null)) {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  } else {
    status = 'Draw'
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map(row => (
        <div key={row} className="board-row">
          {[0, 1, 2].map(col => {
            const i = row * 3 + col
            return (
              <Square key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                isWinner={win_squares.includes(i)} />
            )
          })}
        </div>
      ))}
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  const [sortAscending, setSortAscending] = useState(true)
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  function reverseOrder() {
    setSortAscending(!sortAscending)
  }

  const moves = history.map((squares, move) => {
    let description
    if (move === currentMove) {
      return (
        <li key={move}>You are at move #{move}</li>
      )
    }
    if (move > 0) {
      const [x, y] = getMoveCoordinates(history[move - 1], squares)
      description = 'Go to move #' + move + '(' + x + ',' + y + ')'
    } else {
      description = 'Go to game start'
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button className="reverse-order" onClick={reverseOrder}>Reverse Order</button>
        <ol>{sortAscending ? moves : moves.reverse()}</ol>
      </div>
    </div>
  )
}

function getWinningSquares(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [lines[i], squares[a]]
    }
  }
  return [[], null]
}

function getMoveCoordinates(prevSquares, nextSquares) {
  const change = prevSquares.map((square, i) => {
    return square !== nextSquares[i]
  })
  const position = change.indexOf(true)
  const x = position % 3
  const y = (position - x) / 3
  return [x, y]
}
