import React from 'react'
import { Link } from 'react-router-dom'

const Winner = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <h1 class="font-bungee text-8xl mx-auto text-center">Strike-A-Match</h1>
      <h2 class="text-2xl text-gray-500 text-center">Congratulations, You won Strike-A-Match!</h2>
      <br></br>
      <h3 className="bg-orange-500 text-white text-xl text-center">Click to "Restart Game" to play again!</h3>
      <img class="mx-auto h-auto max-w-xl" src="https://i.imgur.com/e0k0DYE.png" alt="picture of a einstein"/>

    <div className='flex justify-center'>
            <Link to={"/"}>
            <button class="bg-white hover:bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow">Restart Game</button>
            </Link>
            </div>
    </div>
  )
}

export default Winner