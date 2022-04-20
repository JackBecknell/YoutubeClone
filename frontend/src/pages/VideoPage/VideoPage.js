import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "../../components/Comments/Comments";
import "./VideoPage.css";

import axios from "axios";

const VideoPage = (props) => {
  // const { video } = useParams();
  // const [relatedVideos, setRelatedVideos] = useState([]);
  // const [requestReload, setRequestReload] = useState(true);

  // useEffect(() => {
  //   if (requestReload) {
  //     makeGetRequest(props.videoObj.id.videoId);
  //     setRequestReload(false);
  //   }
  // }, [requestReload]);

  // async function makeGetRequest(videoId) {
  //   let videoArray;
  //   try {
  //     let response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=${props.apiKey}&part=snippet&maxResults=20`
  //     );
  //     videoArray = response.data.items;
  //   } catch (ex) {
  //     console.log("From video page get: Oh no something didn't work right :(");
  //   }
  //   let goodVideos = [];
  //   for (let i = 0; i < videoArray.length; i++) {
  //     if (goodVideos.length >= 8) {
  //       break;
  //     } else {
  //       if (videoArray[i].snippet) {
  //         goodVideos.push(videoArray[i]);
  //       }
  //     }
  //   }
  //   setRelatedVideos(goodVideos);
  // }
  let videos = [
    {
      kind: "youtube#searchResult",
      etag: "xvt7yPeeF7k7Bh-6PymN_YBDIE0",
      id: {
        kind: "youtube#video",
        videoId: "EFMD7Usflbg",
      },
      snippet: {
        publishedAt: "2010-06-07T17:11:51Z",
        channelId: "UCY_ZXmsISy8JUBHPorQ9j6g",
        title: "Kiss - Rock And Roll All Nite (From Kiss eXposed)",
        description:
          "REMASTERED IN HD! Music video by Kiss performing Rock & Roll All Nite. (C) 1975 The Island Def Jam Music Group #KISS ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/EFMD7Usflbg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/EFMD7Usflbg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/EFMD7Usflbg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "KissVEVO",
        liveBroadcastContent: "none",
        publishTime: "2010-06-07T17:11:51Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "oaLPSmfpN7YLtsHOGSULfxKw290",
      id: {
        kind: "youtube#video",
        videoId: "W1LsRShUPtY",
      },
      snippet: {
        publishedAt: "2018-07-09T15:21:11Z",
        channelId: "UC1ogcUuxsz76nYV5bZaItSw",
        title: "Old Time Rock &amp; Roll",
        description:
          "Provided to YouTube by Universal Music Group Old Time Rock & Roll · Bob Seger & The Silver Bullet Band Stranger In Town ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/W1LsRShUPtY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/W1LsRShUPtY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/W1LsRShUPtY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Bob Seger - Topic",
        liveBroadcastContent: "none",
        publishTime: "2018-07-09T15:21:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "XPdvGjA_AkGfqZl7zPB2HoCR4es",
      id: {
        kind: "youtube#video",
        videoId: "IbW5K2F1N28",
      },
      snippet: {
        publishedAt: "2018-04-27T08:35:49Z",
        channelId: "UCBOFKormSGezYGz6Ng_jlpg",
        title:
          "Led Zeppelin - Rock and Roll Live Video (Madison Square Garden 1973) Original Records",
        description:
          'Led Zeplin: Rock And Roll (Live at Madison Square Garden, New York, 1973)."Rock and Roll" single by Led Zeppelin from the ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/IbW5K2F1N28/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/IbW5K2F1N28/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/IbW5K2F1N28/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "OLD TAPES",
        liveBroadcastContent: "none",
        publishTime: "2018-04-27T08:35:49Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "TmAg77pfxA1OzeAU4CzZxfZgAZU",
      id: {
        kind: "youtube#video",
        videoId: "RCN6eRVav5k",
      },
      snippet: {
        publishedAt: "2017-01-25T22:03:29Z",
        channelId: "UCYtap7ujIPaxTS2iCDoMi3g",
        title: "Rock and Roll (Remaster)",
        description:
          "Provided to YouTube by Rhino Atlantic Rock and Roll (Remaster) · Led Zeppelin Mothership ℗ 2007 Atlantic Recording ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/RCN6eRVav5k/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/RCN6eRVav5k/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/RCN6eRVav5k/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Led Zeppelin - Topic",
        liveBroadcastContent: "none",
        publishTime: "2017-01-25T22:03:29Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "l56G1UuzzqVWkKjEH9ayyaDKpWs",
      id: {
        kind: "youtube#video",
        videoId: "M7JVlpm0eRs",
      },
      snippet: {
        publishedAt: "2009-02-26T21:20:55Z",
        channelId: "UClTi4yiE4AFFlqUZQUyOAAA",
        title:
          "Huey Lewis And The News - The Heart Of Rock &amp; Roll (Official Music Video)",
        description:
          "REMASTERED IN HD! Official video for Huey Lewis and The News song “The Heart of Rock” from the album Sports. Buy It Here: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/M7JVlpm0eRs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/M7JVlpm0eRs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/M7JVlpm0eRs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "HueyLewisTheNewsVEVO",
        liveBroadcastContent: "none",
        publishTime: "2009-02-26T21:20:55Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "oLC_igh8LVzgAcGpekJc29OCJJs",
      id: {
        kind: "youtube#video",
        videoId: "EwlkfJJ0W4o",
      },
      snippet: {
        publishedAt: "2021-05-11T04:28:03Z",
        channelId: "UCH1JusBeal1C-nV1ju0BzTg",
        title:
          "Best Rockabilly Rock And Roll Songs Collection   Top Classic Rock N Roll Music Of All Time",
        description:
          "Best Rockabilly Rock And Roll Songs Collection Top Classic Rock N Roll Music Of All Time.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/EwlkfJJ0W4o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/EwlkfJJ0W4o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/EwlkfJJ0W4o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Music Que",
        liveBroadcastContent: "none",
        publishTime: "2021-05-11T04:28:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "L7Ch9xwbjeEII7LahbJbeRBqpN8",
      id: {
        kind: "youtube#video",
        videoId: "k_plih5b9To",
      },
      snippet: {
        publishedAt: "2015-08-20T05:47:50Z",
        channelId: "UCvLf57XK_Uv6v1Wv_zdxQJA",
        title:
          "Scooby-Doo! and Kiss: Rock and Roll Mystery - I Was Made For Lovin&#39; You [HD]",
        description:
          "Be sure to check out my main channel over at http://www.youtube.com/beardedcoffeemonkey for more frequent updates, gaming, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/k_plih5b9To/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/k_plih5b9To/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/k_plih5b9To/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Barry T. Smith",
        liveBroadcastContent: "none",
        publishTime: "2015-08-20T05:47:50Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "739U6tC7TsIV2XemqzLMv1S8_MI",
      id: {
        kind: "youtube#video",
        videoId: "SbNVIPAABgw",
      },
      snippet: {
        publishedAt: "2019-08-09T07:00:05Z",
        channelId: "UCGRjJrpD2bmk9Ilq6nq80qg",
        title: "Foo Fighters - Rock And Roll (Live At Wembley Stadium, 2008)",
        description:
          "Foo Fighters performing “Rock and Roll” live at Wembley Stadium, 2008 Listen to Foo Fighters: https://FooFighters.lnk.to/ListenYD ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SbNVIPAABgw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/SbNVIPAABgw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/SbNVIPAABgw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "foofightersVEVO",
        liveBroadcastContent: "none",
        publishTime: "2019-08-09T07:00:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "uzNMqh2TkfpVWW4-xZ5Z1_GWZCY",
      id: {
        kind: "youtube#video",
        videoId: "18635I-x9WY",
      },
      snippet: {
        publishedAt: "2015-08-24T01:22:56Z",
        channelId: "UCvLf57XK_Uv6v1Wv_zdxQJA",
        title:
          "Scooby-Doo! and Kiss: Rock and Roll Mystery - Detroit Rock City [HD]",
        description:
          "Be sure to check out my main channel over at http://www.youtube.com/beardedcoffeemonkey for more frequent updates, gaming, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/18635I-x9WY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/18635I-x9WY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/18635I-x9WY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Barry T. Smith",
        liveBroadcastContent: "none",
        publishTime: "2015-08-24T01:22:56Z",
      },
    },
  ];

  function handleLinkClick(vid) {
    // props.setClickedVideo(vid);
    // setRequestReload(true);
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
          <div className="descrip">
            <p>{props.videoObj.snippet.description}</p>
          </div>
          <div>
            <p>Comments</p>
            <Comments vid={props.videoObj.id.videoId} />
          </div>
        </div>
        <div className="rel-vids-col">
          <p>Related Videos</p>
          {videos &&
            videos.map((vid, index) => (
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
