import axios from 'axios';

const API_KEY = 'pub_56c60b7b618a4a8ab5f5ffb245b56ee7';
const BASE_URL = 'https://newsdata.io/api/1/news';

export const fetchNews = async (country = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&country=${country}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
