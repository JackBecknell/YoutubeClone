import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import PostReply from "../PostReply/PostReply";
import "./Replies.css";

const Replies = (props) => {
  const [replies, setReplies] = useState([]);
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
        `http://127.0.0.1:8000/api/replies/${props.comment_id}/`
      );
      setReplies(response.data);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  return (
    <div>
      {user ? (
        <PostReply
          comment_id={props.comment_id}
          reloadReplies={makeGetRequest}
        />
      ) : (
        <p>You need to login to post a reply.</p>
      )}
      {replies &&
        replies.map((reply, i) => (
          <div className="replies-box">
            <h4>{reply.user.username}</h4>
            <p>{reply.text}</p>
          </div>
        ))}
    </div>
  );
};

export default Replies;
