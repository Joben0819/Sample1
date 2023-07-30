const express = require('express');
const app = express();
const PORT = 3005;
var cors = require('cors')
app.use(express.json());

app.use(cors())


const db = require('./models');

const postrouter = require('./routes/Post2');
app.use('/posts', postrouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// app.get('/1', (req, res) => {
//   // Correct usage of res.json() inside the route handler
//   res.json({ message: 'Hello, World!22' });
// });


// const { MongoClient } = require('mongodb');
// const express = require('express');
// const app = express();

// const url = 'mongodb+srv://neboj08:ZAC08191997@savers.omk0bhy.mongodb.net/?retryWrites=true&w=majority'; 
// const dbName = 'Id'; 
// const PORT = 3000; 

// // Step 1: Connect to MongoDB
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }

//   // const db = client.db(dbName);
//   console.log('Connected to MongoDB successfully!');

//   // Step 2: Perform database operations using the "db" object
//   // Example: Insert a document into the "users" collection
//   // const collection = db.collection('Id');
//   // const newUser = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };
  
//   // collection.insertOne(newUser, (err, result) => {
//   //   if (err) {
//   //     console.error('Error inserting document:', err);
//   //   } else {
//   //     console.log('Document inserted successfully:', result.insertedId);
//   //   }
//   // });

//   // Step 3: Close the MongoDB connection when the server is shut down
//   process.on('SIGINT', () => {
//     client.close();
//     console.log('MongoDB connection closed.');
//     process.exit(0);
//   });

//   // Step 4: Start the server after the MongoDB connection is established
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });



