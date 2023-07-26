const express = require('express');
const app = express();
const PORT = 3005;
var cors = require('cors')
app.use(express.json());

app.use(cors())

app.get('/1', (req, res) => {
  // Correct usage of res.json() inside the route handler
  res.json({ message: 'Hello, World!22' });
});

const db = require('./models');

const postrouter = require('./routes/Post2');
app.use('/posts', postrouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});