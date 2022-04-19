import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const DislikeButton = (props) => {
  const [user, token] = useAuth();

  // props need to be request reload to comments, comment.likes for useState default, comment.id for put request

  const putDislike = async () => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/comments/dislike/${props.comment_id}/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      //props.reloadComments();
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleLike() {
    putLike();
    props.reloadComments();
  }

  return (
    <div key={props.comment_id}>
      <button onClick={handleLike}>Dislike</button>
      <p>dislikes: {props.dislikes}</p>
    </div>
  );
};

export default DislikeButton;
