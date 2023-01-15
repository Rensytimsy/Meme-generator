import React from 'react';
import './App.css';
import Memedata from './MemeData';


export default function Main(){
  const [inputData, setInputData] = React.useState({
    topText: '',
     bottomText: ''
    })
    console.log(inputData)
    
    function changeData(event){
       setInputData(prevState => ({
        ...prevState,
        [event.target.name] : event.target.value
       }))
    }
     

  const [meme, setMeme] = React.useState(Memedata)
  console.log(meme)

   function getMeme(){
    const memeArray = meme.data.memes
    const randomImg = Math.floor(Math.random () * memeArray.length)
    const url = memeArray[randomImg].url
    setMeme(prevMemeArray => ({
      ...prevMemeArray,
      randomMeme: url
    }))
   }


  return(
    <div className="wrapper">
      <input type="text" onChange={changeData} name="topText"/>
      <input type="text" onChange={changeData} name="bottomText"/>
      <br />
      <button onClick={getMeme}>Get Meme</button>
      <div className='meme'>
      <h2 className='meme--text-top'>{inputData.topText}</h2>
      <img src={meme.randomMeme} alt="" className='meme--image'/>
      <h2 className='meme--text-bottom'>{inputData.bottomText}</h2>
      </div>
    </div>
    
    )
}

