import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login Form</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email... "
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <Link to="/register" className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
