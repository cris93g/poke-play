const axios = require('axios');
let getPokemons = async (req, res) => {
	let results = await axios.get(`https://www.pokeapi.co/api/v1/pokedex/1/`);
	let info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};

let getSpecificPokemom = async (req, res) => {
	console.log(req.body);
	let { id } = req.body;
	let results = await axios.get(`https://www.pokeapi.co/api/v2/pokemon-species/${id}`);
	let info = results.data;
	if (info) {
		res.status(200).json(info);
	}
};
module.exports = {
	getPokemons,
	getSpecificPokemom
};
