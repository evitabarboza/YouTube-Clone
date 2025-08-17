import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = () => {

  const { videoId } = useParams()

  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [subscribed, setSubscribed] = useState(false);

  // Fetch video details
  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then(res => res.json())
      .then(data => setApiData(data.items[0]))
      .catch(err => console.error("Error fetching video data:", err));
  };

  // Fetch channel details
  const fetchOtherData = async () => {
    if (!apiData) return;
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then(res => res.json())
      .then(data => setChannelData(data.items[0]))
      .catch(err => console.error("Error fetching channel data:", err));
  };

  // Fetch comments
  const fetchComments = async () => {
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=${videoId}&key=${API_KEY}`;
    await fetch(comment_url)
      .then(res => res.json())
      .then(data => setCommentData(data.items || []))
      .catch(err => console.error("Error fetching comments:", err));
  };

  useEffect(() => {
    fetchVideoData();
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube video player"
      ></iframe>

      <h3>{apiData?.snippet?.title || "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"} Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span><img src={like} alt="Like" />{apiData ? value_converter(apiData.statistics.likeCount) : ""}</span>
          <span><img src={dislike} alt="Dislike" />N/A</span>
          <span><img src={share} alt="Share" />Share</span>
          <span><img src={save} alt="Save" />Save</span>
        </div>
      </div>

      <hr />

      <div className="publisher">
        <img src={channelData?.snippet?.thumbnails?.default?.url || ""} alt="Channel" />
        <div>
          <p>{apiData?.snippet?.channelTitle || ""}</p>
          <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ""} Subscribers</span>
        </div>
        <button onClick={() => setSubscribed(!subscribed)}>
          {subscribed ? "Unsubscribed" : "Subscribe"}
        </button>
      </div>

      <div className="vid-description">
        <p>{apiData?.snippet?.description?.slice(0, 250) || ""}</p>
      </div>

      <hr />

      <h4>{apiData ? value_converter(apiData.statistics.commentCount) : "0"} Comments</h4>

      {commentData.map((item, index) => {
  const topComment = item.snippet.topLevelComment.snippet;
  return (
    <div key={index} className="comment">
      <img
        src={topComment?.authorProfileImageUrl || "/default-avatar.png"} 
        alt={topComment?.authorDisplayName || "User"}
      />
      <div>
        <h3>
          {topComment.authorDisplayName}
          <span> {moment(topComment.publishedAt).fromNow()}</span>
        </h3>
        <p dangerouslySetInnerHTML={{ __html: topComment.textDisplay }} />
        <div className="comment-action">
          <img src={like} alt="Like" />
          <span>{value_converter(topComment.likeCount)}</span>
          <img src={dislike} alt="Dislike" />
        </div>
      </div>
    </div>
  );
})}



    </div>
  );
};

export default PlayVideo;
