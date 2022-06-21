import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

const Letter = ({ letterPos, attemptVal }) => {
  const { board, correctWord, currAttempt, disabledLetters, setDisabledLetters } = useContext(AppContext);
  // [row][col];
  const letter = board[attemptVal][letterPos];

  const correct = correctWord[letterPos] === letter;
  const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter);

  // 단어의 상태 
  // 바로바로 확인 되는 것이 아닌 엔터로 row 값이 증가 했을 때 결과를 확인할 수 있다.
  const letterState = currAttempt.attempt > attemptVal && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if(letter !== '' && !correct && !almost) {
      setDisabledLetters(prev => [...prev, letter]);
    }
  }, [currAttempt.attempt])

  return (
    <div className='letter' id={letterState || ''}>
      { letter }
    </div>
  )
}

export default Letter;