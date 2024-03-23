import React, { useRef } from "react";

const Contact = () => {
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(usernameRef.current.value );
  }

  return (
    <div className="container p-5">
      <form action="" className="form"
      onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="un"
            ref={usernameRef}
            placeholder="Enter your Name"
          />
          <label htmlFor="un" className="form-lebel">
            Enter your Name
          </label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="em"
            ref={emailRef}
            placeholder="Enter your Email"
          />
          <label htmlFor="em" className="form-lebel">
            Enter your Email
          </label>
        </div>
        <br />
        <div className="form-floating">
          <textarea
            name=""
            id="ta"
            ref={messageRef}
            cols="30"
            rows="10"
            className="form-control "
            placeholder="Enter the Message"
          ></textarea>
          <label htmlFor="ta" className="form-label">
            Enter your Message
          </label>
        </div>
        <div>
          <button className="btn btn-primary mt-2">Contact</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
