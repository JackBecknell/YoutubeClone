import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = (props) => {
  const [videos, setVideos] = useState([]);
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
        //Added API key from props
        `https://www.googleapis.com/youtube/v3/search?key=${props.APIkey}&q=${props.searchTerm}&part=snippet&maxResults=8`
      );
      setVideos(response.data.items);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
  }

  //I think we may need to wrap each related vid in a button and style that for onClick events.
  return (
    <div>
      {videos &&
        videos.map((vid, index) => (
          <Link
            key={index}
            onClick={() => handleLinkClick(vid)}
            to={`/videopage/${vid.id.videoId}`}
          >
            <p>{vid.id.videoId}</p>
            <img
              src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}
            ></img>{" "}
          </Link>
        ))}
    </div>
  );
};

export default HomePage;
