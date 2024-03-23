import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Component1 from './Component1'

const App = () => {
  const [mode,setMode] = useState('light')

  const toggleMode = () =>{
    setMode(prevMode => (prevMode === 'dark'?'light':'dark'));
  }

  return (
    <div className='app' style={{backgroundColor: mode === 'dark'?'#333':'#fff',color:mode === 'dark'?'#fff':'#333'}}>
     <div className='com'>
     <h1>Outermost Components</h1>
      <button onClick={toggleMode}>Click Here</button>
      <ThemeContext.Provider value={{mode}}>
        <Component1/>
      </ThemeContext.Provider> 
     </div>
    </div>
  )
}

export default App
