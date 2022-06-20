import React, { useState, createContext } from "react";
import Keyboard from './components/Keyboard';
import Board from "./components/Board";
import { boardDefault } from "./words";

export const AppContext = createContext();

const App = () => {
  const [board, setBoard] = useState(boardDefault);

  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{board, setBoard}}>
        <div className='game'>
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App;