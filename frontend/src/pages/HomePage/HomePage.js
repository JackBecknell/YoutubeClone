import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [videos, setVideos] = useState([]);
  const [requestReload, setRequestReload] = useState(true);

  // This is commented out so that we don't lose api priveleges for ALL TIME!!!
  useEffect(() => {
    makeGetRequest();
  });
  //TOOK [token] OUT !!!

  async function makeGetRequest() {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCgqLI94Jl-nYlO29-rCyWW2CKT_H2gyec&part=snippet"
      );
      setVideos(response.data);
      console.log(response);
    } catch (ex) {
      console.log("Oh no something didn't work right :(");
    }
  }

  //This var stores valid info from 5 seperate video objects we returned through api calls. We are using this as a means of testing without using the api.
  // let fake_videos = [
  //   {
  //     kind: "youtube#searchListResponse",
  //     etag: "EETq3Ns3RDJI8fxfk0sjQby-LtQ",
  //     nextPageToken: "CAUQAA",
  //     regionCode: "US",
  //     pageInfo: { totalResults: 132, resultsPerPage: 5 },
  //     items: [
  //       {
  //         kind: "youtube#searchResult",
  //         etag: "9kAKvJmbB5YPOYE2N95e_-Dt0iQ",
  //         id: { kind: "youtube#video", videoId: "HDhR2Yhnvfo" },
  //       },
  //       {
  //         kind: "youtube#searchResult",
  //         etag: "dPEcoEW6WqwyVP4bvW3hJTzr5CY",
  //         id: { kind: "youtube#video", videoId: "8mTtRAEbmyk" },
  //       },
  //       {
  //         kind: "youtube#searchResult",
  //         etag: "HZHTA2cRZscSIX1NnTt81HPfiLs",
  //         id: { kind: "youtube#video", videoId: "n61ULEU7CO0" },
  //       },
  //       {
  //         kind: "youtube#searchResult",
  //         etag: "J92f06yBYqqfDZ2ApxfQB9O3Zas",
  //         id: { kind: "youtube#video", videoId: "Qt0-9mO-ZXY" },
  //       },
  //       {
  //         kind: "youtube#searchResult",
  //         etag: "jykrByAoNGnEgEO7kciUVSCXVLc",
  //         id: { kind: "youtube#video", videoId: "vCy-sVHpeHw" },
  //       },
  //     ],
  //   },
  // ];

  return (
    <div>
      <p>asdf</p>
      {videos[0].items.map((vid, index) => (
        <Link key={index} to={`/videopage/${vid.id.videoId}`}>
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
