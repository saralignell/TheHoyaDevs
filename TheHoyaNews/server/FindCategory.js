import axios from 'axios';
import { writeFileSync } from 'fs'; 
import { Parser } from 'json2csv';  

import categories from './categories.json' assert { type: 'json' };

async function fetchImage(mediaId) {
  try {
    const mediaResponse = await axios.get(`https://thehoya.com/wp-json/wp/v2/media/${mediaId}`);
    return mediaResponse.data.source_url; 
  } catch (error) {
    console.error('Error fetching image:', error.message);
    return '';  
  }
}

async function fetchArticlesByCategory(categoryInput) {
  let category;

  if (typeof categoryInput === 'number') {
    category = categories.find(cat => cat.id === categoryInput);
  } else {
    category = categories.find(cat => cat.name.toLowerCase() === categoryInput.toLowerCase());
  }

  if (!category) {
    throw new Error('Category not found');
  }

  
  try {
    const response = await axios.get(category.posts_link, {
      params: { per_page: 10 }  
    });
    const articles = response.data;

    const articlesFormatted = await Promise.all(articles.map(async (article) => {
      const imageUrl = article.featured_media ? await fetchImage(article.featured_media) : '';

      return {
        id: article.id,
        date: article.date,
        title: article.title.rendered,
        link: article.link,
        content: article.content.rendered.replace(/<\/?[^>]+(>|$)/g, ""),  
        image_url: imageUrl  
      };
    }));

    const fields = ['id', 'date', 'title', 'link', 'content', 'image_url']; 
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(articlesFormatted);

    writeFileSync('articles_with_images.csv', csv);
    console.log('CSV file created: articles_with_images.csv');

    return csv;  

  } catch (error) {
    console.error('Error fetching articles:', error.message);
  }
}


fetchArticlesByCategory('Academics');  
