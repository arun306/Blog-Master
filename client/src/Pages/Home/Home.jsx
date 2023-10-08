


import { useEffect, useState } from "react"
import Posts from "../../components/Posts/Posts"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"
import "./Home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {

  const [posts,setPosts] = useState([]);

  const {search} = useLocation();
  // console.log(search)

  useEffect(()=>{
    const fetchPosts = async () => {
      try {        
        const res = await axios.get("/posts"+search);
        // console.log(res.data);
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts();
  },[search]);

  return (
      <>
        <Header />
        <div className="home">
            <Posts posts={posts} />
            <SideBar />
        </div>
      </>
  )
}
