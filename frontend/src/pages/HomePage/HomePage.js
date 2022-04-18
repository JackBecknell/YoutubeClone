import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const HomePage = (props) => {
  const [videos, setVideos] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  let fakeVideo = useEffect(() => {
    if (requestReload) {
      makeGetRequest();
      setRequestReload(false);
    }
  }, [requestReload]);

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAL-N85KHO7-kBzp2jBCtPCV_ISXnhml_0&q=N0DhCV_-Qbg&part=snippet&maxResults=8`
      );
      setVideos(response.data.items);
      console.log(response.data.items);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
  }

  return (
    <div>
      {videos &&
        videos.map((vid, index) => (
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
  );
};

export default HomePage;
