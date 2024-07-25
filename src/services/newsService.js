import axios from 'axios';

const NEWSAPI_API_KEY = 'your_key';
const GUARDIAN_API_KEY = 'your_key';
const NYTIMES_API_KEY = 'your_key';


const sources = {
  newsapi: 'https://newsapi.org/v2',
  guardian: 'https://content.guardianapis.com',
  nytimes: 'https://api.nytimes.com/svc/search/v2',
};

export const fetchNews = async (source, params) => {
  let url;
  let config;

  switch (source) {
    case 'newsapi':
      url = `${sources.newsapi}/top-headlines`;
      config = { params: { ...params, apiKey: NEWSAPI_API_KEY } };
      break;
    case 'guardian':
      url = `${sources.guardian}/search`;
      config = { params: { ...params, 'api-key': GUARDIAN_API_KEY } };
      break;
    case 'nytimes':
      url = `${sources.nytimes}/articlesearch.json`;
      config = { params: { ...params, 'api-key': NYTIMES_API_KEY } };
      break;
    default:
      throw new Error('Invalid source');
  }

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};