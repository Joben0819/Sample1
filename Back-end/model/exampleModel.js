const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  title: String,
  content: String,
  email: String,
  image: String

});

const ExampleModel = mongoose.model('Users', exampleSchema);

module.exports = ExampleModel;