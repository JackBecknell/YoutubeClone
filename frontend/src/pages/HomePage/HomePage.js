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
    let videoArray;
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${props.apiKey}&q=${props.searchTerm}&part=snippet&maxResults=30`
      );
      videoArray = response.data.items;
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
    let goodVideos = [];
    for (let i = 0; i < videoArray.length; i++) {
      if (goodVideos.length == 9) {
        break;
      } else {
        if (videoArray[i].snippet) {
          goodVideos.push(videoArray[i]);
        }
      }
    }
    setVideos(goodVideos);
  }

  function handleLinkClick(vid) {
    console.log(
      `this comes from homePage, function handleLinkClick: ${vid.id.videoId}`
    );
    props.setClickedVideo(vid);
  }

  const DisplayVideos = () => {
    let mediaQueryCondition = window.matchMedia("( max-width: 700px )");

    if (mediaQueryCondition.matches) {
      return (
        <div>
          <div className="video-container-small">
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
    } else {
      return (
        <div class-name="home-page-wrapper">
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
    }
  };

  return <DisplayVideos />;
};

export default HomePage;

//Welcome instructor. Jack Becknell and Tess Danielson wilcome you to experiance exellance
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbz
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbz
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzh
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhd
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhde
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhdef
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhsdf
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhsd
// kkhjtyjhfsdfbvfdgbfgbxfg///////////////
// kkhjtyjhfsdfbvfdgbfgbxfgbxf      *  zhs
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhsd
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhsdff
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhasdffs
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhasdfsdfs
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhassdfsdfs
// kkhjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbasdfsdfsd
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhsfsd
// khjtyjhfsdfbvfdgbfgbxfgbxfg fdbzsdfbzhsdfd
// khjtyjh8sd8bvfdgbfgbxfgbxfgb dbzsd8bzhsd8e8
// khjtyjhfsdfbvfdgbfgbxfgbxfgb8d|[][][]]]]]
// khjtyjh8sdfbvfdgbfgbxfgbxfgbfdbzsdfbzhweff
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhwef
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhwel
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhweff
// khjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhiktgs
// hjtyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhwvgh4
// htyjhfsdfbvfdgbfgbxfgbxfgbfdbzsdfbzhwee
// asdfasdfasdfasdfasdf
// kkhjtyjhfsdfbvfdgbfgbx
// oiimefvoiindsiwnefpvbi
