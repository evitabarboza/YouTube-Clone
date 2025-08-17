import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import "./SearchResult.css";


const SearchResults = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  const fetchSearchResults = async () => {
    if (!searchTerm) return;
    const search_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchTerm}&type=video&key=${API_KEY}`;
    try {
      const response = await fetch(search_url);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (err) {
      console.error('Error fetching search results:', err);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="search-results">
      <h2>Search Results for: "{searchTerm}"</h2>
      <div className="feed">
        {videos.length > 0 ? (
          videos.map((item, index) => (
            <Link
              key={item.id.videoId}
              to={`/video/${item.snippet.categoryId || '0'}/${item.id.videoId}`}
              className="card"
            >
              <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>
                {/* Views are not available in search results, so you can skip or fetch later */}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
