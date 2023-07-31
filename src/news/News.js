import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./news.css";

const NEWS_API_KEY = '4224e0024bf741c49a635d306138445d';
const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

function News() {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    // Fetch the news articles from the API
    axios.get(NEWS_API_URL, {
      params: {
        sources: 'techcrunch',
        apiKey: NEWS_API_KEY
      }
    }).then(response => {
      setArticles(response.data.articles);
    });
  }, []);

  useEffect(() => {
    // Set a timeout to automatically change to the next article after 20 minutes
    const timeout = setTimeout(() => {
      setCurrentArticleIndex((currentArticleIndex + 1) % articles.length);
    }, 100 * 60 * 2);

    return () => clearTimeout(timeout);
  }, [currentArticleIndex, articles.length]);

  const currentArticle = articles[currentArticleIndex];

  return (
    <div className='newsb'>
      {currentArticle && (
        <>
          <h2 className='head'>{currentArticle.title}</h2>
          <p className='para'>{currentArticle.description}</p>
          <a className='link' href={currentArticle.url}>Read more</a>
          <img className="news-img" src={currentArticle.urlToImage} alt={currentArticle.urlToImage}/>
        </>
      )}
    </div>
  );
}

export default News;
