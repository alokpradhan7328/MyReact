import React, { useState } from 'react';
import './App.css';

function App(){
const [c,setCount] = useState(0);
const [isDisabled,setisDisabled] = useState(false);
const [isDisabled2,setisDisabled2] =useState(true);

function add(){
    if(c>=25)
    {
       setisDisabled(true); 
      alert("The Number should be < 25 ");
    }
  else
    {
    setCount(c+1);
    setisDisabled2(false);
  }
}
function remove(){
  if(c<=0)
  {
    setisDisabled2(true);
    alert("The number should  be > 0");
  }
  else
  {
    setCount(c-1);
    setisDisabled2(false);}
}
function reset(){
  setCount(0);
  setisDisabled(false);
  setisDisabled2(true);
}

  return(
    <div className='App'>
      <p>Count:{c}</p>
      <div>
      <button onClick={add} disabled={isDisabled}>+</button>
      <button onClick={remove} disabled={isDisabled2}>-</button> 
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
export default App