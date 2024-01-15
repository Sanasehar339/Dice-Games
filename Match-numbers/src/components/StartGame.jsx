import React from 'react'

const StartGame = ({handleClick}) => {
  return (
    <div className='flex justify-around items-center'>
        <img src="/Game Page/dices 1.png" alt="Dices img" />
        <div className='flex flex-col items-end'>
            <h1 className='text-7xl font-bold mb-8'>Dice Game</h1>
            <button onClick={handleClick} className='text-lg bg-black text-white p-1.5 rounded w-44 border-2 border-black hover:text-black hover:bg-white transition-colors'>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame