import React, { useState } from 'react';
import LayoutHead from './LayoutHead';
import ShowRules from './ShowRules';

const Game = () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const diceImages = [
        "/Game Page/dice_1.png",
        "/Game Page/dice_2.png",
        "/Game Page/dice_3.png",
        "/Game Page/dice_4.png",
        "/Game Page/dice_5.png",
        "/Game Page/dice_6.png"
    ];

    const [totalScore, setTotalScore] = useState(0);
    const [showRules, setShowRules] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [currentDiceImage, setCurrentDiceImage] = useState(diceImages[0]);

    const handleNumberSelection = (number) => {
        setSelectedNumber((prevNumber) => (prevNumber === number ? null : number));
    };

    const handleDiceClick = () => {
        const randomIndex = getRandomDiceIndex();
        setCurrentDiceImage(diceImages[randomIndex]);
        setSelectedNumber(null);

        if (selectedNumber === null) {
            console.log('Please select a number.');
        } else {
            const isCorrectGuess = selectedNumber === randomIndex + 1;
            setTotalScore((prevScore) => (isCorrectGuess ? prevScore + 2 : prevScore - 1));
        }
    };

    const getRandomDiceIndex = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * diceImages.length);
        } while (randomIndex === diceImages.indexOf(currentDiceImage));
        return randomIndex;
    };

    const handleResetScore = () => {
        setTotalScore(0);
    };

    const handleShowRule = () => {
        setShowRules((prev) => !prev);
    };

    return (
        <div className='flex flex-col items-center'>
            <LayoutHead
                number={numbers}
                selectedNumber={selectedNumber}
                totalScore={totalScore}
                handleNumberSelection={handleNumberSelection}
            />
            <div className='flex flex-col items-center'>
                <img
                    className={`w-44 h-44 cursor-pointer ${!selectedNumber && 'pointer-events-none'}`}
                    src={currentDiceImage}
                    alt="Dice"
                    onClick={handleDiceClick}
                />
                <p className='mb-4'>Click on Dice to Roll</p>
                <button
                    onClick={handleResetScore}
                    className='text-lg bg-black text-white p-1.5 m-2 rounded w-44 border-2 border-black hover:text-black hover:bg-white transition-colors'
                >
                    Reset score
                </button>
                <button
                    onClick={handleShowRule}
                    className={`text-lg bg-white text-black p-1.5 m-2 rounded w-44 border-2 border-black hover:text-white hover:bg-black transition-transform`}
                >
                    {showRules ? 'Hide' : 'Show'} Rules
                </button>
            </div>
            {showRules && <ShowRules />}
        </div>
    );
};

export default Game;
