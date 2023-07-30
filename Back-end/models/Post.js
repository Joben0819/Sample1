const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: { // Add the 'image' field to the model definition
      type: DataTypes.STRING, // Assuming the filename of the image is stored as a string
      allowNull: true, // Set to true if the image field is optional
    },
  });

  // Define associations (if needed)
  Post.associate = (models) => {
    // Add associations here (e.g., Post.belongsTo(models.User))
  };

  return Post;
};