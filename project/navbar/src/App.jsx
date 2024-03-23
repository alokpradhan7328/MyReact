import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { useState } from 'react'
import { useEffect } from 'react';


const App = () => {

  const currentTheme = localStorage.getItem('currentTheme');
  const [theme,setTheme] = useState(currentTheme?currentTheme : 'light');
  useEffect (()=>{
    localStorage.setItem('currentTheme',theme);
  },[theme])

  return (
    <div className={`contianer ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
