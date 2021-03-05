const db = require('../data/db-config')

// getRecipes(): should return a list of all recipes in the database.
const getRecipes = () => {
  return db('recipes')
  .select("*")
}



// getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe







// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe



module.exports = {
  getRecipes,
}
