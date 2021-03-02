import axios from 'axios';

export default axios.create({
  baseURL: "https://api.themoviedb.org",
  params: {
    api_key: process.env.API_KEY
  }
});