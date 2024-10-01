import axios from 'axios';

// Define the structure of an article (from WordPress API)
//edit this
interface Article {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
}

// Replace with the actual URL of your deployed Express server
const API_URL = 'https://thehoyadevs.onrender.com';

// Function to fetch articles from the WordPress API via Express
export const getArticles = async (page: number = 1): Promise<Article[]> => {
  try {
    const response = await axios.get<Article[]>(`${API_URL}/getarticles`, {
      params: { page, per_page: 20 },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
