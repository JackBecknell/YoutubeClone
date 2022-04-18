import React, { useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const { video } = useParams();
  console.log(props.videoObj);
  return (
    <div>
      <h1>I'm the video page!</h1>
      <p>url vid: {video}</p>
      <p>videoOBJ: {props.videoObj.id.videoId}</p>
      {/* <p>{video}</p>
      <iframe src={`https://www.youtube.com/embed/${props.videoObj.id.videoId}`}>vidID: {props.videoObj.id.videoId}</iframe> */}
      <p>TITLE {props.videoObj.snippet.title}</p>
      <p>DESCRIPTION {props.videoObj.snippet.description}</p>
    </div>
  );
};

export default VideoPage;
