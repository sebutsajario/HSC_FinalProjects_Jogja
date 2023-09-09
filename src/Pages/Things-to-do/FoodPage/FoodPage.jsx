import React from 'react'
import Food from '../../../ThingToDoComponents/Foods/Pages/Food'
import BotButton from '../../../Components/Landing/Landing-bot/BotButton'


const FoodPage = () => {
  return (
    <div>
      <Food />
      <div className='flex justify-center items-center'>
        <BotButton />
      </div>
    </div>
  )
}

export default FoodPage
