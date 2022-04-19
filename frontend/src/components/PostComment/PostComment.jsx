import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const PostComment = (props) => {
  const [commentText, setCommentText] = useState("");
  const [user, token] = useAuth();

  const postComment = async (newComment) => {
    try {
      let request = await axios
        .post("http://127.0.0.1:8000/api/comments/", newComment, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(console.log("This is coming from your then statment!"));
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      video_id: props.videoId,
      text: `${commentText}`,
      likes: 0,
      dislikes: 0,
    };
    postComment(newComment);
    setCommentText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment</label>
          <input
            type="text"
            placeholder="Type comment here..."
            onChange={(event) => setCommentText(event.target.value)}
          />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
