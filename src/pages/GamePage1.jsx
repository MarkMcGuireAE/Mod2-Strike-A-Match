import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const GamePage1 = () => {

    let {user} = useParams()

    

  return (
    <div>
        <h1 class="font-bungee text-8xl mx-auto text-center">Welcome to Strike-A-Match</h1>
        <h3 class="text-2xl text-gray-500 text-center">The matching game that started it all! {user}!</h3>
        <img  class="mx-auto h-auto max-w-lg" src="/public/images/einstein.png" alt="picture of a einstein"/>
        <div class="text-lg text-gray-500 text-center">
        <h3>Strike-A-Match, is a word association game based on one of the original BoxerJam games that were released with AOL in early internet days!</h3>
        <h3>The goal of this game is simple. Simply match the 3 or 4 words that share a commonality.</h3>
        <br></br>
        <h3> In round 1, players are given 6 words, 3 are random, and the other 3 share a commonality. In round 1, the word these other's share in common is given to you! Each matching word set is worth 250 points! If you guess incorrectly, you lose 250 points. You move to the next round, by accumulating 1000 points!</h3>
        <br></br>
        <h3>In round 2, players are given 9 words, 6 are random, and the other 3 share a commonality. In round 2, the word these other's share in common is given to you! Each matching word set is worth 500 points! If you guess incorrectly, you lose 500 points. You move to the next round, by accumulating 3000 points!</h3>
        <br></br>
        <h3>In round 3, players are given 12 words, 8 are random, and the other 4 share a commonality. In round 3, the word these other's share in common is hidden from you! Each matching word set is worth 500 points! If you guess incorrectly, you lose 500 points. You move to the next round, by accumulating 5000 points!</h3>
        <br></br>
        <h3>If at anytime, you lose too many points, your game is over, and you will be asked to restart the game!</h3>
        <br></br>
        <Link to={"./Gameboard"}>
        <button class="text-xl bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow">Start the Game</button>
        </Link>
        </div>
    </div>
  )
}

export default GamePage1