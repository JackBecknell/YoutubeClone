import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Replies from "../Replies/Replies";
import PostComment from "../PostComment/PostComment";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [requestReload, setRequestReload] = useState(true);
  const [user, token] = useAuth();

  useEffect(() => {
    //if (requestReload) {
    makeGetRequest();
    //setRequestReload(false);
    //}
  }, [props.vidId]);

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/comments/${props.vidId}/`
      );
      //response.data becomes an array of 2 comment objects but something goes wrong with setComments.
      setComments(response.data);
      console.log("This may never be logged in the console ):");
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  return (
    <>
      {/* {user ? <p>post a comment</p> : <p>you need to login</p>}
      {console.log("Replies render")}
      {comments &&
        comments.map((comment, i) => (
          <div key={i}>
            <p>Comment: {comment.text}</p>
            <p>Likes: {comment.likes}</p>
            <p>Dislikes: {comment.dislikes}</p>
            <p>User: {comment.user.username} </p>
            <Replies comment_id={comment.id} />
          </div>
        ))} */}
      {console.log("Comments from comments.jsx: ", comments)}
    </>
  );
};

export default Comments;
//I moved post replies from in between lines 44 and line 45
