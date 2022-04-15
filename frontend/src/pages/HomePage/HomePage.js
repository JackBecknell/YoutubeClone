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
    const fetchVideos = async () => {
      console.log('?')
      try {
        let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=hello&key=AIzaSyCgqLI94Jl-nYlO29-rCyWW2CKT_H2gyec");
        console.log(response.data)
        console.log(`2 ${response.data}`)
        
        setVideos(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">

      <h1>video</h1>
      {videos.items.map((vid, index) => 
      <p>Video {index+1} : video kind: {vid.kind} <br></br> video etag: {vid.etag} <br></br> video id (0): {vid.id.kind} <br></br> video id (1): {vid.id.videoId} <br></br> <br></br></p>
      )}

    </div>
  );
};

export default HomePage;