import React from 'react';

const LikeSection = props => {
  let likes_changable = props.likes;
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div className="like-section-wrapper">
        <i onClick ={ likes_changable => {return likes_changable++}} className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">

      {likes_changable} likes</p>
</div>
  )
};

export default LikeSection;
