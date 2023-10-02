


import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <img
            className="postImg"
            src="https://picsum.photos/200" 
            alt="postImg" 
        />

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem Title </span>
            <hr/>
            <span className="postDate">1hr ago</span>
        </div>

        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            obcaecati maxime nemo, facilis natus magnam neque quidem quasi
            corporis  eligendi deleniti voluptatibus, rerum in doloribus? Nihil, esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            obcaecati maxime nemo, facilis natus magnam neque quidem quasi
            corporis  eligendi deleniti voluptatibus, rerum in doloribus? Nihil, esse.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            obcaecati maxime nemo, facilis natus magnam neque quidem quasi
            corporis  eligendi deleniti voluptatibus, rerum in doloribus? Nihil, esse.
        </p>

    </div>
  )
}
