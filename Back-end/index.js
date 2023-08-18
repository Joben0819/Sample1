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
     

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads2',
    filename: (req, file, callback) => {
      callback(null, Date.now() + path.extname(file.originalname));
    },
});


const upload = multer({ storage });

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

// app.use('/posts', postrouter);

// app.use("/uploads99", express.static(path.join(__dirname, "uploads2")));

app.get('/data', async (req, res) => {
  try {
    const data = await ExampleModel.find({});
    // const titles = data.map(item => path.join(__dirname, 'uploads2', item.image));
    // var mm = JSON.parse(titles)
      // const imageUrl = `/uploads/1691733828884.png`;
      // const base64ImageData = "data:image/png;base64,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";

      // const base64Data = base64ImageData.replace(/^data:image\/\w+;base64,/, '');

      // // Convert base64 data to a buffer
      // const imageBuffer = Buffer.from(base64Data, 'base64');
    
      // // Set the content type of the response to image/png
      // res.contentType('image/png');

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving data' });
  }
});


app.use(express.json());

app.post('/', upload.single('image'), async (req, res) => {
  // if (!req.file) {
  //   res.status(400).json({ message: 'No image file received.' });
  //   return;
  // }

  // const image = req.file.filename;
  // const imageUrl = `/uploads/${image}`;

  const imageBuffer = Buffer.from(req.body.image, 'base64');
  try {
    // Create a new document using the Mongoose model
    const newDocument = new ExampleModel({
      title: req.body.title,
      content: req.body.content,
      email: req.body.email,
      image:  req.body.image, 
    });

    // Save the document to the database
    await newDocument.save();

    // Construct the URL for serving the uploaded image

    res.status(201).json({ message: 'Document inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error inserting document' });
  }
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


