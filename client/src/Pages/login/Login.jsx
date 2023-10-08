import { Link } from "react-router-dom";
import "./Login.css";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      // console.log(res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  // console.log(user)
  // console.log(isFetching)

  return (
    <div className="login">
      <span className="loginTitle">Login Form</span>
      <form className="loginForm" 
      // onClick={handleSubmit}
      >
        <label>username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username... "
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" onClick={handleSubmit} disabled={isFetching}>Login</button>
      </form>
      <Link to="/register" className="link">
        <button className="loginRegisterButton">Register</button>
      </Link>
    </div>
  );
}
