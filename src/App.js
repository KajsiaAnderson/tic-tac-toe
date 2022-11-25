import React, { useState } from 'react'
import './App.css';
import Square from './Square';

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", "",])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", "",])
    setPlayer(true)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              player={player}
              setPlayer={setPlayer}
              squareValue={value}
              index={index} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
