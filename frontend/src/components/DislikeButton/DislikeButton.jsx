import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const DislikeButton = (props) => {
  const [user, token] = useAuth();

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
    } catch (error) {
      console.log(error.message);
    }
    props.reloadComments();
  };

  function handleLike() {
    putDislike();
  }

  return (
    <div key={props.comment_id}>
      <button onClick={handleLike}>Dislike</button>
      {/* <p>dislikes: {props.dislikes}</p> */}
    </div>
  );
};

export default DislikeButton;
