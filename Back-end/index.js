// const express = require('express');
// const app = express();
// const PORT = 3005;
// var cors = require('cors')
// app.use(express.json());

// app.use(cors())


// const db = require('./models');

// const postrouter = require('./routes/Post2');
// app.use('/posts', postrouter);

// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });

// app.get('/1', (req, res) => {
//   // Correct usage of res.json() inside the route handler
//   res.json({ message: 'Hello, World!22' });
// });


// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const express = require('express');
const app = express();
const ExampleModel = require('./model/exampleModel'); // Import the model
const url = 'mongodb+srv://neboj08:AnneKathleen0601@savers.omk0bhy.mongodb.net/Market-Place?retryWrites=true&w=majority'; 
// const dbName = 'Id'; 
const PORT = 3000; 
const postrouter = require('./routes/Post3');
var cors = require('cors')
app.use(express.json());

app.use(cors())
     

// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: './uploads2',
//     filename: (req, file, callback) => {
//       callback(null, Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage });

async function connect(){
  try{
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('connecteds')
  }
  catch(error){
    console.log(error)
  }
}

connect();

app.use('/posts', postrouter);

// app.get('/data', async (req, res) => {
//   try {
//     const data = await ExampleModel.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error retrieving data' });
//   }
// });

// app.post('/upload', upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     res.status(400).json({ message: 'No image file received.' });
//     return;
//   }

//   const image = req.file.filename;
//   try {
//     // Create a new document using the Mongoose model
//     const newDocument = new ExampleModel({
//       title: req.body.title,
//       content: req.body.content,
//       email: req.body.email,
//       image: image, 
//     });

//     // Save the document to the database
//     await newDocument.save();

//     res.status(201).json({ message: 'Document inserted successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Error inserting document' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


