
exports.seed = async function(knex) {
  await knex("instructions").insert([  
    { instructions: "Slice potatoes", step_number: 1, recipes_id: 1}, 
		{ instructions: "Heat up oil in a pan until a drop of water sizzles on top", step_number: 2, recipes_id: 1},
    { instructions: "Fry potatoes until they float or are a golden color", step_number: 3, recipes_id: 1},
    { instructions: "Allow to drain on a paper towel", step_number: 4, recipes_id: 1},
		{ instructions: "Boil water", step_number: 1, recipes_id: 2},
    { instructions: "Measure the rice", step_number: 2, recipes_id: 2},
    { instructions: "Put rice into the water", step_number: 3, recipes_id: 2},
    { instructions: "Cover and boil until all of the water is gone", step_number: 4, recipes_id: 2},
	])
};
