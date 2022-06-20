import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyVal, bigKey }) => {
  const { onSelectLetter, onDelete, onEnter } = useContext(AppContext);


  const selectLetter = () => {
    if(keyVal === 'Enter') {
      onEnter();
    } else if(keyVal === 'Delete') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  }

  return (
    <div 
      className='key' 
      id={bigKey ? 'big' : 'disabled'}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  )
}

export default Key;