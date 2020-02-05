// You will add code in this file

import React, {useState}from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import "./Posts.css";

const Post = props => {
  // set up state for the likes

const [likes, likeCount] = useState(props.posts.likes)

  return (
    <div className="post-border">
      <PostHeader
        username={props.posts.username}
        thumbnailUrl={
          props.posts.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.posts.imageUrl}
        />
      </div>
      <LikeSection likes = {likes}/>
      <CommentSection
        postId={props.posts.imageUrl}
        comments={props.posts.comments}
      />
    </div>
  );
};

export default Post;
