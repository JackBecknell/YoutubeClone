import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

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
      <p>Replies: </p>
      {replies &&
        replies.map((reply, i) => (
          <div>
            <p>Reply: {reply.text}</p>
            <p>User: {reply.user.username}</p>
          </div>
        ))}
    </div>
  );
};

export default Replies;