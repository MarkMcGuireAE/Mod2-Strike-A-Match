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
      <h1>Welcome to Strike-A-Match</h1>
      <h2>The matching game, that started it all. Input your players name and click "Start Game" to begin!</h2>
            <label htmlFor="playerName">Player Name: </label>
            <br></br>
            <input type="text" id="playerName" value={input} onChange={handleChange}></input>
            <br></br>
            <br></br>
            <Link to={"./GamePage1/" + input}>
            <button onClick={handleClick}>Start Game</button>
            </Link>
    </div>
  )
}

export default Homepage