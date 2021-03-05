
exports.seed = async function(knex) {
  await knex("amounts").insert([   
		{ amount: "2", recipes_id: 1, ingredients_id: 1 },
		{ amount: "1 cup", recipes_id: 2, ingredients_id: 2 },
    { amount: "3 cups", recipes_id: 1, ingredients_id: 3 },
    { amount: "2 cups", recipes_id: 2, ingredients_id: 4 },
	])
};
