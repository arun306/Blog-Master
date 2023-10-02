import "./SinglePost.css";
// single post component
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Arun </b>
          </span>
          <span className="singlePostDate">1hr ago</span>
        </div>

        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          itaque inventore consequuntur eveniet nihil animi eos eaque? Sunt
          veritatis, fuga harum rerum excepturi dicta laboriosam eveniet culpa
          esse a corrupti!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          itaque inventore consequuntur eveniet nihil animi eos eaque? Sunt
          veritatis, fuga harum rerum excepturi dicta laboriosam eveniet culpa
          esse a corrupti!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          itaque inventore consequuntur eveniet nihil animi eos eaque? Sunt
          veritatis, fuga harum rerum excepturi dicta laboriosam eveniet culpa
          esse a corrupti!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          itaque inventore consequuntur eveniet nihil animi eos eaque? Sunt
          veritatis, fuga harum rerum excepturi dicta laboriosam eveniet culpa
          esse a corrupti!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum,
          itaque inventore consequuntur eveniet nihil animi eos eaque? Sunt
          veritatis, fuga harum rerum excepturi dicta laboriosam eveniet culpa
          esse a corrupti!
        </p>
      </div>
    </div>
  );
}
