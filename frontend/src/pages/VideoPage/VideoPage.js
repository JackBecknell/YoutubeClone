import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";

import axios from "axios";

const VideoPage = (props) => {
  const { video } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
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
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoObj.id.videoId}&type=video&key=${props.apiKey}&part=snippet`
      );
      setRelatedVideos(response.data.items);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
    setRequestReload(true);
  }

  //src={`https://www.youtube.com/embed/N0DhCV_-Qbg`} <= Hard coded version for testing
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
      <div>
        <p>Related Videos</p>
        {relatedVideos &&
          relatedVideos.map((vid, index) => (
            <Link key={index} to={`/videopage/${vid.id.videoId}`}>
              <p>{vid.id.videoId}</p>
              <a onClick={() => handleLinkClick(vid)}>
                <img
                  src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}
                ></img>{" "}
              </a>
            </Link>
          ))}
      </div>
      <div>
        <p>Comments</p>
        <Comments vid={props.videoObj.id.videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
