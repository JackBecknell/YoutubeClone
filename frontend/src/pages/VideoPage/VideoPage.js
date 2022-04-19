import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";

import axios from "axios";

const VideoPage = (props) => {
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
        //Added APIkey from props
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoObj.id.videoId}&type=video&key=${props.APIkey}&part=snippet`
      );
      setRelatedVideos(response.data.items);
    } catch (ex) {
      console.log(ex);
    }
  }

  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
    setRequestReload(true);
  }

  const invisButton = {
    cursor: "pointer",
    border: "1px solid #3498db",
    backgroundColor: "transparent",
    maxWidth: "fit-content",
  };
  //src={`https://www.youtube.com/embed/N0DhCV_-Qbg`} <= Hard coded version for testing
  return (
    <div>
      <iframe
        title="spotlight_video"
        src={`https://www.youtube.com/embed/${props.videoObj.id.videoId}`}
      ></iframe>
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
              <button onClick={() => handleLinkClick(vid)} style={invisButton}>
                <p>{vid.id.videoId}</p>
                <img
                  src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}
                  alt="vid_thumbnail"
                ></img>
              </button>
            </Link>
          ))}
      </div>
      <div>
        <p>Comments</p>
        <Comments vidId={props.videoObj.id.videoId} />
      </div>
    </div>
  );
};

export default VideoPage;
