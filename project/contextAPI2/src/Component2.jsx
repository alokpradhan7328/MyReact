import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Component2 = () => {

    const {mode} = useContext(ThemeContext)
  return (
    <div className='component2' style={{backgroundColor: mode === 'dark'?'#333':'#fff',color:mode === 'dark'?'#fff':'#333'}}>
      <h2>Helllooooooo</h2>
      <p>This is Component2</p>

    </div>
  )
}

export default Component2
