import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useForm";

function Login() {
 
  const [user, handleChange, handleSubmit] = useForm("login");



  return (
    <section className="registrSec">
      <form onSubmit={handleSubmit}>``
        <h2>Login</h2>

        <input
          id="username"
          type="text"
          name="username"
          onChange={handleChange}
          value={user.username || ""}
          placeholder="Enter a username"
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
           <Link to = "register">Register</Link> 
     
      </form>

      <div className="backimg"></div>
    </section>
  );
}

export default Login;
