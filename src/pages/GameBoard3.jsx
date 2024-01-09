import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'




const GameBoard3 = () => {
    const [data, setData] = useState(null)
    const [wordslist, Setwordslist] = useState([])
    const [totalscore, setTotalScore] = useState(3000)
    let score = 500
    
    const shuffle = (array) => { 
        for (let i = array.length - 1; i > 0; i--) { 
          const j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
      };
      async function getData() {
    
        try{
    
        const  response = await fetch ("https://www.taboocardsapi.com/api/cards/random")
        const info = await response.json()
        setData(info.data)
        console.log(info)
        let arr = [{word:info.data.forbiddenWords[0],
                    match: true,
                    clicked: false},
                    {word: info.data.forbiddenWords[1],
                        clicked: false,
                        match: true},
                        {word: info.data.forbiddenWords[2],
                        clicked: false,
                            match: true},
                            {word: info.data.forbiddenWords[3],
                                clicked: false,
                                    match: true}]
        
        for (let word of [1,2,3,4,5,6,7,8]) {
            const  randomResponse = await fetch ("https://random-word-api.herokuapp.com/word")
            const randomWord = await randomResponse.json()
            arr.push({word: randomWord[0],
                clicked: false,    
                match: false})
            
        }
        console.log(arr)
        
        Setwordslist(shuffle(arr))
        console.log(wordslist)
        
        console.log(info)
    } catch (error) {
        console.error(error)
    }
    }
    
        useEffect(() => {
            
            getData()}, [])
    
        console.log(data)
         
    
        function handleClick (index) {
            let arr = wordslist.slice()
            console.log(index)
            arr[index].clicked = !arr[index].clicked
            Setwordslist(arr)
        }
    
        function buttonClick () {
            let arr = wordslist.slice()
            if (arr.every((item) =>{
                console.log(item)
                return item.clicked == item.match
            })) {
                setTotalScore(totalscore + score)
            } else {
                setTotalScore(totalscore - score)
            }
         getData()
        
        }
  return (
    <div>
    {data && 
    <div className='max-w-screen-2xl mx-auto'>>
      

    <h1 class="font-bungee text-8xl mx-auto text-center">Strike-A-Match: Round 3</h1>
        <div>
        <h3 className="text-xl text-gray-500 text-center"> In round 3, players are given 12 words, 8 are random, and the other 4 share a commonality. 
            In round 3, the word these other's share in common is hidden from you! Each matching word set is worth 500 points! If you guess incorrectly, you lose 500 points. 
            You move to the next round, by accumulating 5000 points!</h3>
            <br></br>
            <h3 className="text-xl text-gray-500 text-center">If at anytime, you lose too many points, your game is over, and you will be asked to restart the game!</h3>
    </div>
    <br></br>
       <div>
        <h1 class="font-bungee text-2xl  text-left">Total Score: {totalscore}</h1>
        <h2 class="font-bungee text-2xl  text-left">Round Points: {score}</h2>
    </div>
    <br></br>
    <div>
        <h3 class="font-bungee text-2xl mx-auto text-center">Word in Common: ????</h3>
    </div>
    <br></br>
    <br></br>
    <div className="flex justify-center items-center flex-col ">
    <div className='grid grid-cols-3'>
        {wordslist.map((item, index) => (
             <div className="flex justify-center items-center" key={index} className={item.clicked? "red box" : "box"} onClick={()=>handleClick(index)} >
             <button className={` capitalize rounded overflow-hidden shadow-lg text-2xl text-uppercase text-center px-6 py-4  text-gray-800 inline-block m-8 ${item.clicked? " bg-orange-500" : ""}`}>{item.word}</button>
         </div>
        )) }
    
    
    </div>
    <br></br>
    <button class="bg-white hover:bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow mx-auto" onClick={buttonClick}>Submit Answers</button>
    </div>
    <br></br>
    
    
    
    <div className='flex justify-end'>
        {totalscore>=5000? <Link to={"/GamePage1/:user/GameBoard/GameBoard2/GameBoard3/Winner" }><button class="bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow" totalscore={totalscore}>You Win Strike-A-Match!</button> </Link>: null}
        {totalscore<=-5000? <div><h1> You lose the game, please restart</h1>
            <Link to={"/"}><button class="bg-orange-500 text-gray-800  py-2 px-4 border border-gray-400 rounded shadow">Reset Game</button></Link></div> : null}
        </div>
    
    </div>}
    </div>
  )
  
}

export default GameBoard3