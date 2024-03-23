import React, { useState } from 'react'
import { mainContext } from './main';
import Component  from './Component';

const App = () => {
  const [count,setCount] = useState(0)

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>inrc</button>
        <mainContext.Provider value={count}>
          <Component/>
        </mainContext.Provider>
  </div>
  )
}
export default App