const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const [postsResponse, photosResponse] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/photos')
    ]);
    const posts = postsResponse.data;
    const photos = photosResponse.data;
    const mergedData = {};
    posts.forEach(post => {
      mergedData[post.id] = { ...post, photos: [] };
    });

    photos.forEach(photo => {
      if (mergedData[photo.id]) {
        mergedData[photo.id].photos.push(photo);
      } else {
        mergedData[photo.id] = { id: photo.id, photos: [photo] };
      }
    });
    console.log(mergedData[1])
    const mergedArray = Object.values(mergedData);

    res.json(mergedArray);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});
  app.get('/photos', async (req, res) => {
    const photoId = req.query.id;
    console.log(photoId)
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });
  app.get('/posts/:id', async (req, res) => {
    try {
      var par = req.params.id
      const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(par)
      var jsonData = (response1.data)
      console.log(jsonData)
      
      const filteredData = jsonData.find(item => item.id === Number(par));
      console.log(filteredData)

      res.json(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});