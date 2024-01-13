import React from 'react'

const LayoutHead = ({ handleNumberSelection, totalScore, selectedNumber }) => {
    const numbers = [1, 2, 3, 4, 5, 6]

    return (
        <header className='flex justify-between w-2/3 m-8'>
            <div>
                
                <p className='text-6xl'>{totalScore}</p>
                <span className='text-sm'>Total Score</span>
            </div>
            <div>

                <div className='m-2'>
                    {numbers.map((number) => (
                        <button
                            key={number}
                            className={`text-xl border-2 border-black h-12 w-12 rounded m-1 transition-colors ${selectedNumber == number ? 'bg-black text-white' : 'bg-white text-black'}`}
                            onClick={() => handleNumberSelection(number)}
                        >
                            {number}
                        </button>
                    ))}
                </div>
                <div className='text-base float-end font-semibold'>Select Number</div>
            </div>
        </header>
    )
}

export default LayoutHead