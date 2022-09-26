import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function Register() {
  
 const   [user, handleChange, handleSubmit] = useForm('register')
 

  return (
    <section className="registrSec">

      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <input
        id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={user.name || ""}
          placeholder="Enter a Name"
        />
        <input
        id="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={user.username || ""}
          placeholder="Enter a username  "
        />
        <input
        id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email || ""}
          placeholder="Enter an email"
        />
        <input
        id="psw"
          type="password"
          name="psw"
          onChange={handleChange}
          value={user.psw || ""}
          placeholder="Enter a password"
        />
        <button disabled>Submit</button>
         <p>Already have an Account ?</p>
          <Link to="/">Log in</Link>
         
       
      
      </form>
        
      

      <div className="backimg"></div>
    </section>
  );
}

export default Register;
