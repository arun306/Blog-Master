import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {

  const PF = "http://localhost:5000/images/";

  return (
    <div className="post"> 
      {post.photo && (
        <img
          className="postImg"
          // src="https://picsum.photos/200"
          src={PF + post.photo}
        />
      )}

      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat, idx) => (
            <span className="postCat" key={idx}>
              {cat}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>

      <p className="postDesc">{post.desc}</p>
    </div>
  );
}
