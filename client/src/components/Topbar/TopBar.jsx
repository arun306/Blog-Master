import { Link } from "react-router-dom";
import "./TopBar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // window.location.replace("");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topListItem">HOME</li>
          </Link>
          <Link to="/" className="link">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/" className="link">
            <li className="topListItem">CONTACT</li>
          </Link>
          <Link to="/write" className="link">
            <li className="topListItem">WRITE</li>
          </Link>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings" className="link">
            <img className="topImg" src={PF+user.profilePic} alt="profile pic" />
          </Link>
        ) : (
          <ul className="topList">
            <Link to="/login" className="link">
              <li className="topListItem">LOGIN</li>
            </Link>
            <Link to="/register" className="link">
              <li className="topListItem">REGISTER</li>
            </Link>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
