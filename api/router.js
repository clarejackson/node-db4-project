const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const recipes = await model.getRecipes()
    console.log(recipes)
    res.status(200).json(recipes)
  } catch (err) {
    next(err)
  }
})

// not working
router.get('/:id/shoppingList', async (req, res, next) => {
  console.log(req.params.id, "working test")
  try {
    const shoppingList = await model.getShoppingList(req.params.id)
  console.log(shoppingList)
  res.status(200).json(shoppingList)
  } catch (err) {
    next(err)
  }
})


router.get('/:id/instructions', async (req, res, next) => {
  try {
    const recipeInstructions = await model.getInstructions(req.params.id)
  console.log(recipeInstructions)
  res.status(200).json(recipeInstructions)
  } catch (err) {
    next(err)
  }
})

module.exports = router;