import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Replies from "../Replies/Replies";

import axios from "axios";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  useEffect(() => {
    if (requestReload) {
      makeGetRequest();
      setRequestReload(false);
    }
  }, [requestReload]);

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${props.vid}/`
      );
      setComments(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  return (
    <div>
      {comments &&
        comments.map((comment, i) => (
          <div>
            <p>Comment: {comment.text}</p>
            <p>Likes: {comment.likes}</p>
            <p>Dislikes: {comment.dislikes}</p>
            <p>User: {comment.user.username} </p>
            <Replies comment_id={comment.id} />
          </div>
        ))}
    </div>
  );
};

export default Comments;
