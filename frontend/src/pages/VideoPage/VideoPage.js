import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import "./VideoPage.css";

import axios from "axios";

const VideoPage = (props) => {
  const { video } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  useEffect(() => {
    if (requestReload) {
      makeGetRequest(props.videoObj.id.videoId);
      setRequestReload(false);
    }
  }, [requestReload]);

  async function makeGetRequest(videoId) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${props.apiKey}&part=snippet`
      );
      checkRelVideos(response.data.items);
    } catch (ex) {
      console.log("From video page get: Oh no something didn't work right :(");
    }
  }
  async function makeReplacementGetRequest(videoId) {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${props.apiKey}&part=snippet&maxResults=1`
      );
      console.log("response.data.items : " + response.data.items);
      console.log("response.data : " + response.data);

      return response.data.items;
    } catch (ex) {
      console.log("From video page get: Oh no something didn't work right :(");
    }
  }

  function checkRelVideos(videoArray) {
    let returnArray = [];
    for (let i = 0; i < videoArray.length; i++) {
      if (videoArray[i].snippet) {
        returnArray.push(videoArray[i]);
      } else {
        let checkVideo = videoArray[i];
        while (checkVideo.snippet == undefined) {
          let newVid = makeReplacementGetRequest(props.videoObj.id.videoId);
          if (newVid.snippet) {
            returnArray.push(newVid);
          } else {
            checkVideo = newVid;
          }
        }
      }
    }
    setRelatedVideos(returnArray);
  }

  function handleLinkClick(vid) {
    props.setClickedVideo(vid);
    setRequestReload(true);
  }

  return (
    <div>
      <div className="video-relvideos">
        <div className="video-title-decrip">
          <div className="align-center">
            <iframe
              className="iframe"
              src={`https://www.youtube.com/embed/${props.videoObj.id.videoId}`}
            ></iframe>{" "}
          </div>
          <h3>{props.videoObj.snippet.title}</h3>
          <div className="profpic-channel">
            <div className="user-profile"></div>
            <p>{props.videoObj.snippet.channelTitle}</p>
          </div>
          <p>
            DESCRIPTION <br></br>
            {props.videoObj.snippet.description}
          </p>
          <div>
            <p>Comments</p>
            <Comments vid={props.videoObj.id.videoId} />
          </div>
        </div>
        <div>
          <p>Related Videos</p>
          {relatedVideos &&
            relatedVideos.map((vid, index) => (
              <Link key={index} to={`/videopage/${vid.id.videoId}`}>
                <a onClick={() => handleLinkClick(vid)}>
                  <div className="rel-vid-box">
                    <img
                      src={`https://img.youtube.com/vi/${vid.id.videoId}/0.jpg`}
                    ></img>{" "}
                    <div className="rel-vid-title-channel-txt">
                      <h4>{vid.snippet.title}</h4>
                      <h5>{vid.snippet.channelTitle}</h5>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
//let videoSnip = vid.snipp
