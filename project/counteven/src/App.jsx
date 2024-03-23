import React, { useState } from 'react'
import './App.css'

function App() {

  const [c,setCount] = useState(0)
  const [background,setBackground] = useState('')
  const [isDisabled,setisDisabled] = useState(true)

  const add=()=>{
    setCount(c+1)
    setBackground("#"+Math.round(Math.random()*10000000).toString(16))
  }

  const remove = ()=>{
    if(c<=0)
  {
    setisDisabled(true);
    alert("The number should  be > 0");
  }
  else
  {
    setCount(c-1);
    setisDisabled(false);
    setBackground("#"+Math.round(Math.random()*10000000).toString(16))
  }
  }

  const isEven = c%2 ==0

  return (
    <div className='App' style={{backgroundColor: background}}>
      <div className='isEven'>{isEven?'Even':'Odd'}</div>
      <div className='test'>
        <div id='Count'>Count:{c}</div>
        <div className='button'>
          <button onClick={add}>+</button>
          <button onClick={remove}>-</button>
        </div>
      </div>
    </div>
  )
}
export default App
