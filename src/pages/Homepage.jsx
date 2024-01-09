// import { useState } from "react"

import { useState } from "react"
import { Link } from "react-router-dom"


const Homepage = () => {

    const [input, setInput] = useState ([])
   
    function handleChange(e) {
    setInput(e.target.value)
    }

    function handleClick ()  {
       
       console.log(input)

    }
  return (
    <div>
      <h1 class="font-bungee text-8xl mx-auto text-center">Welcome to Strike-A-Match</h1>
      <h2 class="text-2xl text-gray-500 text-center">The matching game, that started it all. Input your name and click "Start Game" to begin!</h2>
      <img class="mx-auto h-auto max-w-xl" src="./public/images/match.png" alt="picture of a match"/>
            <div class="flex flex-col justify-center items-center">
            <label class="text-gray-500 text-2xl" htmlFor="playerName">Player Name: </label>
            <br></br>
            <input class="border border-gray-500 rounded-lg text-2xl " type="text" id="playerName" value={input} onChange={handleChange}></input>
            <br></br>
                        <Link to={"./GamePage1/" + input}>
            <button class="bg-white hover:bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow"onClick={handleClick}>Start Game</button>
            </Link>
            </div>
    </div>
  )
}

export default Homepage