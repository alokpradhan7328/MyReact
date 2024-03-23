import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
