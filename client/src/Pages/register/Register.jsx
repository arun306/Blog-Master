import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email... "
        />
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username... "
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login" className="link">
        <button className="registerLoginButton">Login</button>
      </Link>
    </div>
  );
}
