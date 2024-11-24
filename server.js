const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/search', async (req, res) => {
  const query = req.query.q;

  try {
    const response = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    const html = response.data;


    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching results');
  }
});
