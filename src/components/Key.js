import React from "react";

const Key = ({ keyVal, bigKey }) => {

  return (
    <div className='key' id={bigKey ? 'big' : 'disabled'}>
      {keyVal}
    </div>
  )
}

export default Key;