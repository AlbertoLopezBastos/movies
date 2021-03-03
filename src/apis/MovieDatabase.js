import axios from 'axios';

export default axios.create({
  baseURL: "https://api.themoviedb.org/",
  params: {
    api_key: process.env.REACT_APP_API_KEY
  }
});