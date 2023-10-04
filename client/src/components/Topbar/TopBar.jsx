import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const user = true;
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
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile pic"
          />
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
