import React, { useState } from 'react'
import './App.css'
import StartGame from './components/StartGame'
import Game from './components/Game'

const App = () => {
  const [startGame, setStartGame] = useState(false)

  function handleClick() {
    setStartGame(prev => !prev)
  }

  return (
    <div>
      { //Turnury for swiching b/w start game amd game component 
        startGame ?
          <Game />
          :
          <StartGame
            handleClick={handleClick}
          />
      }
    </div>
  )
}

export default App