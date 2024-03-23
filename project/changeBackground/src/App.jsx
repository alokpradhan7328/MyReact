import { useState } from 'react'
import './index.css'

function App(){
  const [currentColor , setCurrentColor]=useState('')

  const handleOnChange = (event) =>{
    console.log(event)
    const color = event.target.value;
    console.log(color)
    setCurrentColor(color)
  };

  return(
    <div className="App" style={{backgroundColor:currentColor}}>
      <div className='test'>
        {/* <h1>{document.write(currentColor)}</h1> */}
      <h1>Change</h1>
      <input type="color" onChange={handleOnChange}/>

      </div>
    </div>
  );
}
export default App