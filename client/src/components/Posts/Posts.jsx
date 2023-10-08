

import Post from "../Post/Post"
import "./Posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      {
        posts.map((post,idx)=>(
          <Post key={idx} post={post}/>
        ))
      }
    </div>
  )
}
