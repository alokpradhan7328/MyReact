import {React,useContext} from 'react'
import Component2 from './Component2'
import { ThemeContext } from './ThemeContext'

const Component1 = () => {
  const {mode} = useContext(ThemeContext)
  return (
    <div className='component1' style={{backgroundColor: mode === 'dark'?'#333':'#fff',color:mode === 'dark'?'#fff':'#333'}}>
      <h2>Component2</h2>
      <Component2/>
    </div>
  )
}

export default Component1
