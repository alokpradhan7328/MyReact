import React, { useState } from "react";
import './index.css'

const App = () => {

  const [formDetails,setFormDetails] = useState({
    name:"",
    email:"",
    password:""
  })

  const change = (e)=>{
    const {name,value} =e.target;
    setFormDetails({...formDetails,[name]:value})
  }

  const [formErrors,setFormErrors] = useState({
    name:"",
    email:"",
    password:""
  })

  const submit = (e) =>{
    e.preventDefault();
    if(formDetails.password.length <5){
      setFormErrors({...formErrors,password:"Password must be at least 5 characters"})
    }
    console.log(formDetails);
  }
  
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="username"
          id="un"
          placeholder="Enter UserName"
          onChange={change}
        />
        {formErrors.username && <p className="error">{formErrors.username}</p>}
        <br />
        <br />
        <input
         type="text" 
         name="email" 
         id="em" 
         placeholder="Enter Email"
         onChange={change} />
         {formErrors.email && <p className="error">{formErrors.email}</p>}
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="pwd"
          placeholder="Eneter Your Password"
          onChange={change}
        />
        {formErrors.password && <p className="password">{formErrors.password}</p>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
