import React from 'react'

const Die = ({value,isHeld,holdDice}) => {
    return (
        <div className='flex flex-col text-center flex-wrap'>
            <span
            onClick={holdDice}
            className={`m-2 w-10 h-10 text-lg text-center leading-10 shadow-md font-semibold rounded-lg cursor-pointer ${isHeld ? 'bg-green-300' : 'bg-white'}`}
        >
            {value}
        </span>
        </div>
    )
}

export default Die