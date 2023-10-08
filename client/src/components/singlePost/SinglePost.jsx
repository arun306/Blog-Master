import { useLocation, Link } from "react-router-dom";
import "./SinglePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
// single post component
export default function SinglePost() {
  const loc = useLocation();
  // console.log(loc)

  const path = loc.pathname.split("/")[2];
  // console.log(path)

  const [post, setPost] = useState({});

  const PF = "http://localhost:5000/images/";

  const { user } = useContext(Context);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`/posts/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        // console.log(post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  // handle Delete post

  const handleDelete = async () => {
    try {
      const f = window.confirm("Are you sure you want to delete?");
      if (f) {
        await axios.delete(`/posts/${path}`, {
          data: { username: user.username },
        });
        window.location.replace("/");
      }
    } catch (error) {
      alert("something went wrong");
    }
  };

  const handleUpdate = async () => {
    await axios.put(`/posts/${path}`, { username: user.username, title, desc });
    window.location.reload();
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post?.photo && (
          <img
            className="singlePostImg"
            // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            src={PF + post?.photo}
            alt=""
          />
        )}

        {updateMode ? (
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            className="singlePostTitleInput"
          />
        ) : (
          <h1 className="singlePostTitle">
            {post?.title}
            {post?.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fa-regular fa-pen-to-square"
                  onClick={() => {
                    const f = window.confirm(
                      `Are you sure you want to UPDATE?`
                    );
                    setUpdateMode(f);
                  }}
                ></i>
                <i
                  className="singlePostIcon fa-regular fa-trash-can"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post?.username}`} className="link">
              <b> {post?.username} </b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post?.createdAt).toDateString()}
          </span>
        </div>

        {updateMode ? (
          <textarea
            value={desc}
            className="singlePostDescInput"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        ) : (
          <p className="singlePostDesc">{post?.desc}</p>
        )}

        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
