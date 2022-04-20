import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

import axios from "axios";

const HomePage = (props) => {
  const [videos, setVideos] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  useEffect(() => {
    if (requestReload || props.startSearch) {
      makeGetRequest();
      setRequestReload(false);
      props.setStartSearch(false);
    }
  }, [requestReload, props.startSearch]);

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${props.apiKey}&q=${props.searchTerm}&part=snippet&maxResults=8`
      );
      setVideos(response.data.items);
      console.log(response.data.items);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  function handleLinkClick(vid) {
    console.log(
      `this comes from homePage, function handleLinkClick: ${vid.id.videoId}`
    );
    props.setClickedVideo(vid);
  }

  return (
    <div>
      <div className="video-container">
        {videos &&
          videos.map((vid, index) => (
            <div className="video-card">
              <Link key={index} to={`/videopage/${vid.id.videoId}`}>
                <a onClick={() => handleLinkClick(vid)}>
                  <img
                    src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}
                  ></img>{" "}
                </a>
                <div className="title-wrapper">
                  <p>{vid.snippet.title}</p>
                </div>
              </Link>
              <div className="description-wrapper">
                <p>{vid.snippet.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
