import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Box } from '@mui/material';
import Article from '../components/Article';
import Search from '../components/Search';
import { fetchNews } from '../services/newsService';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadNews = async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchNews('newsapi', { q: query, country: 'us' });
      setArticles(data.articles);
    } catch (err) {
      setError('Failed to fetch news');
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        News Aggregator
      </Typography>
      <Search onSearch={loadNews} />
      {loading && <CircularProgress />}
      {error && <Typography color="error">{error}</Typography>}
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Article
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsPage;