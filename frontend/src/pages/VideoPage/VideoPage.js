import React, { useState } from "react";
import { useParams } from "react-router-dom";

const VideoPage = (props) => {
  const { video } = useParams();

  return (
    <div>
      <h1>I'm the video page!</h1>
      <p>{video}</p>
    </div>
  );
};

export default VideoPage;
