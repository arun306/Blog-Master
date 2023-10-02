

import SideBar from "../../components/sidebar/SideBar"
import SinglePost from "../../components/singlePost/SinglePost"
import "./Single.css"


// this is single post
export default function Single() {
  return (
    <div className="single">
        <SinglePost />
        <SideBar />
    </div>
  )
}
