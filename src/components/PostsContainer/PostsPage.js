//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";
import CommentSection from "../CommentSection/CommentSectionContainer";


// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {

  return (<div className="posts-container-wrapper">

    {
      props.posts.map(posts => {

        return <Post posts={posts}/>

      })
    }


    }
</div>
  )
}

export default PostsPage;
