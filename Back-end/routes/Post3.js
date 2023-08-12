const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const ExampleModel = require('../model/exampleModel');
var fs = require('fs');

const storage = multer.diskStorage({
    destination: './uploads2',
    filename: (req, file, callback) => {
      callback(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
    try {
      const data = await ExampleModel.find();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving data' });
    }
  });
  
  router.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
      res.status(400).json({ message: 'No image file received.' });
      return;
    }
  
    const image = req.file.filename;

    var files = fs.readdirSync(require(`../uploads/${image}`))
    try {
      // Create a new document using the Mongoose model
      const newDocument = new ExampleModel({
        title: req.body.title,
        content: req.body.content,
        email: req.body.email,
        image: image, 
      });
  
      // Save the document to the database
      await newDocument.save();
  
      res.status(201).json({ message: 'Document inserted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error inserting document' });
    }
  });
  

module.exports = router;