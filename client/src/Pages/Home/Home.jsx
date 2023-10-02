


import Posts from "../../components/Posts/Posts"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"
import "./Home.css"

export default function Home() {
  return (
      <>
        <Header />
        <div className="home">
            <Posts />
            <SideBar />
        </div>
      </>
  )
}
