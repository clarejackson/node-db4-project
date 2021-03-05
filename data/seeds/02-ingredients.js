
exports.seed = async function(knex) {
  await knex("ingredients").insert([   
		{ name: "potatoes", recipes_id: 1 },
		{ name: "rice", recipes_id: 2 },
    { name: "oil", recipes_id: 1 },
    { name: "water", recipes_id: 2 },
	])
};
