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
  });

  // Define associations (if needed)
  Post.associate = (models) => {
    // Add associations here (e.g., Post.belongsTo(models.User))
  };

  return Post;
};