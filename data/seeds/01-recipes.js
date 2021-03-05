
exports.seed = async function(knex) {
  await knex("recipes").insert([   
		{ name: "French Fries"},
		{ name: "Rice"},
	])
};
