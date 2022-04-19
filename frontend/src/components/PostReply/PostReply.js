import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const PostReply = (props) => {
  const [replyText, setReplyText] = useState("");
  const [user, token] = useAuth();

  const postReply = async (newReply) => {
    try {
      let request = await axios
        .post("http://127.0.0.1:8000/api/replies/new/", newReply, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then(
          console.log("This is coming from your then statment!"),
          props.reload(true)
        );
    } catch (error) {
      console.log(error.message);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    let newReply = {
      text: `${replyText}`,
      comment: `${props.comment_id}`,
    };
    postReply(newReply);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Reply</label>
          <input
            type="text"
            placeholder="Type reply here..."
            onChange={(event) => setReplyText(event.target.value)}
          />
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
};

export default PostReply;
