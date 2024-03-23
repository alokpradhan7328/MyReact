import React from 'react'
import Header from './Header'
import ChangeBackground from '../../../project/changeBackground/src/main'
import ControlledAPI2 from '../../contextAPI2/src/main'
import Count from '../../count/src/main'
import CountIsEven from '../../count/src/main'
import Modal from '../../modal/src/main'
import MovieSearch from '../../movieSearch/src/main'
import Qoute from '../../quote/src/main'
import RegistrationForm from '../../RegistrationForm/src/main'
import StopWatch from '../../stopwatch/src/main'
import NotFound from './NotFound'
import { Route,Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/changeBackground' Component={ChangeBackground}/>
        <Route path='/controlledAPI2' Component={ControlledAPI2}/>
        <Route path='/count' Component={Count}/>
        <Route path='countIsEven' Component={CountIsEven}/>
        <Route path='modal' Component={Modal}/>
        <Route path='movieSearch' Component={MovieSearch}/>
        <Route path='qoute' Component={Qoute}/>
        <Route path='registrationForm' Component={RegistrationForm}/>
        <Route path='stopWatch' Component={StopWatch}/>
        <Route path='*' Component={NotFound}/>
      </Routes>
    </div>
  )
}

export default App