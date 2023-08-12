const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { Post } = require('../models');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });


router.get('/', async (req, res) => {
    const listofpart = await Post.findAll()
    res.json(listofpart);
  }
);

// API endpoint to handle image upload
router.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No image file received.' });
    return;
  }

  const image = req.file.filename;

  try {
    // Save the image filename to the database
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      email: req.body.email,
      image: image, // Assuming you have an 'image' field in your Post model
    });

    res.status(200).json({ message: 'Post created successfully.', post: newPost });
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

module.exports = router;


