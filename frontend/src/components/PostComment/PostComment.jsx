import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import "./PostComment.css";

const PostComment = (props) => {
  const [commentText, setCommentText] = useState("");
  const [user, token] = useAuth();
  let requestReload = false;

  const postComment = async (newComment) => {
    try {
      let request = await axios
        .post("http://127.0.0.1:8000/api/comments/", newComment, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(console.log("This is coming from your then statment!"));
      props.reloadComments();
      resetComment();
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
    console.log(commentText);
    postComment(newComment);
    console.log("I made it to the end of handleSubmit!!!! :D");
  }

  const resetComment = () => {
    setCommentText(" ");
    console.log(commentText);
  };

  return (
    <div className="post-comment-box">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Add a comment..."
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
          />
          <button type="submit">Comment</button>
        </div>
      </form>
    </div>
  );
};

export default PostComment;
