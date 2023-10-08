import { Link } from "react-router-dom";
import "./Register.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      console.log(res)
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };


  useEffect(()=>{
    setError(false);
  },[email,username,password])


  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit} autoComplete="off">
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username... "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email... "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">Register</button>
      </form>
      <Link to="/login" className="link">
        <button className="registerLoginButton">Login</button>
      </Link> 
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
