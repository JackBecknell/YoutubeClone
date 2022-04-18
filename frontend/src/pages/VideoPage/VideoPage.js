import React, { useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const { video } = useParams();
  console.log(props.videoObj);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${props.videoObj.id.videoId}`}
      ></iframe>{" "}
      <p>
        TITLE <br></br>
        {props.videoObj.snippet.title}
      </p>
      <p>
        DESCRIPTION <br></br>
        {props.videoObj.snippet.description}
      </p>
    </div>
  );
};

export default VideoPage;
