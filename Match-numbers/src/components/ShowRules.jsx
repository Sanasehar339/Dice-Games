import React from 'react'

const ShowRules = () => {
    return (
        <div className='bg-red-100 p-2 rounded '>
            <h3 className='text-lg font-semibold'>How to play dice game</h3>
            <p className='text-sm ml-2'>Select any number</p>
            <p className='text-sm ml-2'>Click on dice image</p>
            <p className='text-sm ml-2'>After click on  dice  if selected number is equal to dice number you will get 2 points </p>
            <p className='text-sm ml-2'>If you get wrong guess then 1 point will be dedcuted </p>
        </div>
    )
}

export default ShowRules