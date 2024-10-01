import axios from 'axios';

const API_URL = 'https://thehoyadevs.onrender.com';  // Replace with your Render URL

export const getArticles = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}/getarticles`, { params: { page, per_page: 20 } });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
