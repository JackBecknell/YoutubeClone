import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

    useEffect(() => {
      makeGetRequest();
  }, [token])

  async function makeGetRequest(){
      try{
          let response = await axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAL-N85KHO7-kBzp2jBCtPCV_ISXnhml_0&part=snippet');
          setVideos(response.data)
          console.log(response.data)
      } catch (ex) {
          console.log('Oh no something didn\'t work right :(');
      }
  }


  return (
    <div className="container">
      <h1>video</h1>
      <button onClick={makeGetRequest}>click me</button>
      {videos.length > 0 && 
        videos.items.map((vid, index) => (
          <p key={vid.id}>Video {index+1} : video kind: {vid.kind} <br></br> video etag: {vid.etag} <br></br> video id (0): {vid.id.kind} <br></br> video id (1): {vid.id.videoId} <br></br> video snippet title: {vid.snippet.title} <br></br></p>
        )
      )}
    </div>
  );
};

export default HomePage;