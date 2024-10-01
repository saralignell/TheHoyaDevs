const express = require('express');
const axios = require('axios');
const cors = require('cors');  

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Endpoint to get articles from the WordPress API
app.get('/getarticles', async (req, res) => {
  try {
    const response = await axios.get('https://your-wordpress-site.com/wp-json/wp/v2/posts', {
      params: { per_page: 20 },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching articles');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
