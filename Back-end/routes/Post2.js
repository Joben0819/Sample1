const express = require('express');
const { Post } = require('../models');


const router = express.Router()

router.get('/', async (req, res) => {
    const listofpart = await Post.findAll()
    res.json(listofpart);
  }
);

router.post('/', async (req , res) => {
  const post = req.body;
  await Post.create(post);
  res.json(post)
})



module.exports = router;

