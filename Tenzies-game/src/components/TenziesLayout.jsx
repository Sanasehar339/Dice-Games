import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'
import Die from './Die';

const TenziesLayout = () => {
    const [dice, setDice] = useState(allNewDice());
    const [tenzies, setTenzies] = useState(false)

    useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDice() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid()
        }
    }
    function allNewDice() {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(
                generateNewDice()
            );
        }
        return newDice;
    }

    const handleRoll = () => {
       if(!tenzies){ setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? die : generateNewDice()
        }));}else{
            setTenzies(false)
            setDice(allNewDice())
        }
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isHeld: !die.isHeld } :
                die
        }))
    }

    const diceElements = dice.map((die) => (
        <Die value={die.value} isHeld={die.isHeld} key={die.id} holdDice={() => holdDice(die.id)} />
    ));

    return (
        <div className='bg-[#0B2434] rounded w-96'>
            {tenzies && <Confetti width='1366px' />}
            <div className='bg-[#f5f5f5] p-3 m-7 rounded'>
                <header className='flex flex-col items-center justify-center'>
                    <h2 className='text-3xl font-semibold'>Tenzies</h2>
                    <p className='text-base text-center m-1'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                </header>
                <footer className='flex flex-col items-center justify-center'>
                    <div className='flex text-center flex-wrap p-2'>
                        {diceElements}
                    </div>
                    <button onClick={handleRoll} className='bg-[#5035FF] appearance-none text-white font-semibold px-4 py-3 rounded text-center'>{tenzies ? 'Reset Game' : 'Roll'}</button>
                </footer>
            </div>
        </div>
    );
}

export default TenziesLayout;
