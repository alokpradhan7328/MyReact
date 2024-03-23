import React from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-warning'>
    <div className='form_container p-5 rounded bg-white'>
      <form>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-2'>
              <label htmlFor="fname">First Name</label>
              <input type="text" id="fn" placeholder='Enter first Name' className='form-control' />
          </div>
          <div className='mb-2'>
              <label htmlFor="lname">Last Name</label>
              <input type="text" id="ln" placeholder='Enter Last Name' className='form-control' />
          </div>
          <div className='mb-2'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="em" placeholder='Enter Mail' className='form-control' />
          </div>
          <div className='mb-2'>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="ped" placeholder='Enter Password' className='form-control' />
          </div>
             
          <div className='d-grid'>
              <button className="btn btn-primary">Log in</button>
          </div>
          <p className='text-end mt-2'>
          Already Registed<Link to="/SignUp" className='ms-2'>Sign in</Link>
          </p>
      </form>
    </div>
  </div>
  )
}

export default SignUp
