import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const [formDetails,setFormDetails] = useState({
        email: '',
        password: ''
    })

    const change =(e) =>{
        const {name,value} = e.target
        setFormDetails({
         ...formDetails,
            [name]:value
        })
    }

    const[formerros,setFormErrors] = useState(
        {
            email:'',
            password:''
        }
    );
    
    const submit = (e) =>{
        e.preventDefault();
        if(formDetails.password<7)
        {
            setFormErrors({
             ...formerros,
                password:'PassWord Should be 8 characters'
            })
        }
    }

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-success'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={submit}>
            <h3 className='text-center'>Log-In</h3>
            <div className='mb-2'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="em" placeholder='Enter Mail' onChange={change} className='form-control' />
            </div>
            <div className='mb-2'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="pwd" placeholder='Enter Password' onChange={change}  className='form-control' />
                {formerros.password && <p className='text-danger'>{formerros.password}</p>}
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox' name='checkbox' id='check'/>
                <label htmlFor="check" className='custom-input-label ms-2'>Remember Me</label>
            </div>
            <div className='d-grid'>
                <button type='submit' className="btn btn-primary">Sign In</button>
            </div>
            <p className='text-end mt-2'>
                Forgot <a href="">Password?</a> <Link to="/SignUp" className='ms-2'>Sign In</Link>
            </p>
        </form>
      </div>
    </div>
  )
}

export default Login
