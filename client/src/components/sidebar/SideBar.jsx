import { useEffect, useState } from "react";
import "./SideBar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SideBar() {

  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/category");
      // console.log(res)
      setCats(res.data)
    }

    getCats();
  },[])

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImg"
          src="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772243_640.jpg"
          alt=""
        />
        <p>
          about me!
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {
            cats.map((cat,idx)=>(
              <Link to={`/?cat=${cat.name}`} className="link" key={idx}>
                <li className="sidebarListItem">{cat.name}</li>
              </Link>
            ))
          }
          {/* <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li> */}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>

    </div>
  );
}
