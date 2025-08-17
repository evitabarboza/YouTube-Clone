import React, { use, useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import {API_KEY, value_converter} from '../../data'

const PlayVideo = ({ videoId }) => {

  const [apiData, setApiData] = useState(null)

  const fetchVideoData = async () => {
    //Fetching Videos Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY} `
    await  fetch(videoDetails_url)
    .thne(reso=re>res/json())
    .then(data=>setApiData(data.items[0]))
  }


  useEffect(() => {
      fetchVideoData()
    }, [])

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>{apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull; {moment(apiData.snippet.publishedAt).fromNow()} ago</p>
        <div>
          <span><img src={like} alt="Like" />125</span>
          <span><img src={dislike} alt="Dislike" />2</span>
          <span><img src={share} alt="Share" />Share</span>
          <span><img src={save} alt="Save" />Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={jack} alt="Jack" />
        <div>
          <p>Lorem, ipsum dolor.</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="vid-description">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, excepturi.</p>
      </div>

      <hr />

      <h4>130 Comments</h4>
      <div className="comment">
        <img src={user_profile} alt="User Profile" />
        <div>
          <h3>Jack Nicholson <span>1 day ago</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati error eaque, expedita iusto corporis.</p>
          <div className="comment-action">
            <img src={like} alt="Like" />
            <span>244</span>
            <img src={dislike} alt="Dislike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
