import { useState } from "react"
import './App.css'

function App(){
const [background,setBackground] = useState('#ffffff')
function change(){
  console.log(Math.round(Math.random()*10000000).toString(16))
  setBackground("#"+Math.round(Math.random()*10000000).toString(16))
}

    return (
      <div className="changer" style={{backgroundColor:background}}>
        <button onClick={change} style={{backgroundColor:background}}>👆</button>
      </div>
  )
}
export default App