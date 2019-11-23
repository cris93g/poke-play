const { getPokemons, getSpecificPokemom } = require('../controller/apiController');

module.exports = (app) => {
	app.get(`/api/pokemon`, getPokemons);
	app.post(`/api/specific`, getSpecificPokemom);
};
