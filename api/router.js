const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const recipes = await model.getRecipes()
    res.status(200).json(recipes)
  } catch (err) {
    next(err)
  }
})

module.exports = router;