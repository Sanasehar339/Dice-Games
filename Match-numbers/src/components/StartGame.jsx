import React from 'react'

const StartGame = ({handleClick}) => {
  return (
    <div className='flex justify-around items-center'>
        <img src="/Game Page/dices 1.png" alt="Dices img" />
        <div className='flex flex-col'>
            <h1 className='text-7xl font-bold mb-8'>Dice Game</h1>
            <button onClick={handleClick} className='.btn-primary'>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame