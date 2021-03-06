const db = require('../data/db-config')

// getRecipes(): should return a list of all recipes in the database.
const getRecipes = () => {
  return db('recipes')
  .select("*")
}



// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
const getShoppingList = (recipes_id) => {
  return db('amounts as a')
    .join("ingredients as i", "a.ingredients_id", "i.id")
    .where("a.recipes_id", recipes_id)
    .select("i.recipes_id", "a.amount", "i.name")
}


// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe
const getInstructions = (recipes_id) => {
  return db('instructions')
    .where("recipes_id", recipes_id)
    .select("*")
}


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
}
