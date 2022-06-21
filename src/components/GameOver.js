import React,{ useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext); 

  return (
    <div className='gameOver'>
      <h3 style={{ marginTop: '1rem' }}>
        {
          gameOver.guessWord ? "You Correctly Guessed!!" : "You Failed!"
        }
      </h3>
      <h1>
        Correct: {correctWord}
      </h1>
      {
        gameOver.guessWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)
      }
    </div>
  )
}

export default GameOver;