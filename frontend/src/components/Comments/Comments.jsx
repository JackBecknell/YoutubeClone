import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Replies from "../Replies/Replies";
import LikeButton from "../LikeButton/LikeButton";
import DislikeButton from "../DislikeButton/DislikeButton";
import PostComment from "../PostComment/PostComment";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [requestReload, setRequestReload] = useState(true);
  const [user, token] = useAuth();

  useEffect(() => {
    if (requestReload) {
      makeGetRequest();
      setRequestReload(false);
    }
  }, [requestReload]);

  useEffect(() => {
    makeGetRequest();
  }, [props.vid]);

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
      {user ? (
        <PostComment videoId={props.vid} reloadComments={makeGetRequest} />
      ) : (
        <p>You need to login to post a comment.</p>
      )}
      {comments &&
        comments.map((comment, i) => (
          <div>
            <p>User: {comment.user.username} </p>
            <p>Comment: {comment.text}</p>
            <LikeButton
              likes={comment.likes}
              comment_id={comment.id}
              reloadComments={makeGetRequest}
            />
            <p>{comment.likes - comment.dislikes}</p>
            <DislikeButton
              dislikes={comment.dislikes}
              comment_id={comment.id}
              reloadComments={makeGetRequest}
            />
            <Replies comment_id={comment.id} reloadComments={makeGetRequest} />
          </div>
        ))}
    </div>
  );
};

export default Comments;
