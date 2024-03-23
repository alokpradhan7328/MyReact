import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div>
      <nav>
      <div>
        <ul>
            <li><Link to='/changeBackground'>ChangeBackgound</Link></li>
            <li><Link to='/controlledAPI2'>ControlledAPI2</Link></li>
            <li><Link to='/count'>Count</Link></li>
            <li><Link to='countIsEven'>CountIsEven</Link></li>
            <li><Link to='/modal'>Modal</Link></li>
            <li><Link to='/movieSearch'>MovieSearch</Link></li>
            <li><Link to='qoute'>Qoute</Link></li>
            <li><Link to='registrtionForm'>RegistraionForm</Link></li>
            <li><Link to='stopWatch'>StopWatch</Link></li>
        </ul>
      </div>
      </nav>
    </div>
  )
}

export default Header
