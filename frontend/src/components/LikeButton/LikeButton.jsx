import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const LikeButton = (props) => {
  const [user, token] = useAuth();

  // props need to be request reload to comments, comment.likes for useState default, comment.id for put request

  const putLike = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/comments/like/${props.comment_id}/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      console.log(error.message);
    }
    props.reloadComments();
  };

  function handleLike() {
    putLike();
    //will eventually add conditional logic to keep user from clicking multiple times
  }

  return (
    <div key={props.comment_id}>
      <button onClick={handleLike}>Like</button>
      {/* <p>likes: {props.likes}</p> */}
    </div>
  );
};

export default LikeButton;
