// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
console.log(props)
  // Add state for the comments
const [comments, commentCount] = useState(props.comments);

  return (
    <div>
      {
      comments.map(comment =>{
        return <Comment comment = {comment}/>
        })
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
