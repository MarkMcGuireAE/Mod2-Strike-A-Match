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
    <div className='container'>
      

    <h1>Strike-A-Match: Round 3</h1>
        <div>
        <h3> In round 3, players are given 12 words, 8 are random, and the other 4 share a commonality. 
            In round 3, the word these other's share in common is hidden from you! Each matching word set is worth 500 points! If you guess incorrectly, you lose 500 points. 
            You move to the next round, by accumulating 5000 points!</h3>
            <h3>If at anytime, you lose too many points, your game is over, and you will be asked to restart the game!</h3>
    </div>
       <div>
        <h1>Total Score: {totalscore}</h1>
        <h2>Round Points: {score}</h2>
    </div>
    <div>
        <h3>Word in Common: ????</h3>
    </div>
    
    <div className='box-container'>
        {wordslist.map((item, index) => (
             <div key={index} className={item.clicked? "red box" : "box"} onClick={()=>handleClick(index)} >
             <p>{item.word}</p>
         </div>
        )) }
    
    
    </div>

    <button onClick={buttonClick}>Submit Answers</button>
    <div>
        {totalscore>=5000? <Link to={"/GamePage1/:user/GameBoard/GameBoard2/Gameboard3"}><button totalscore={totalscore}>Continue to next round!</button> </Link>: null}
        {totalscore<=-3000? <div><h1> You lose the game, please restart</h1>
            <Link to={"/"}><button>Reset Game</button></Link></div> : null}
        </div>
    
    </div>}
    </div>
  )
  
}

export default GameBoard3