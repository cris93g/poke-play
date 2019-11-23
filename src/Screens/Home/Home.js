import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: []
		};
	}

	componentDidMount() {
		axios.get(`/api/pokemon`).then((results) => {
			this.setState({
				pokemons: results.data.pokemon_entries
			});
		});
	}
	render() {
		const { pokemons } = this.state;
		console.log(pokemons);
		let showPokemons = pokemons ? (
			pokemons.map((poke) => {
				return (
					<div>
						<div>{poke.pokemon_species.name}</div>
						<Link to={`/description/${poke.pokemon_species.name}`}>
							<div>
								{poke.entry_number.toString().length < 3 ? poke.entry_number.toString().length == 1 ? (
									<img src={`https://www.serebii.net/pokemongo/pokemon/00${poke.entry_number}.png`} />
								) : (
									<img src={`https://www.serebii.net/pokemongo/pokemon/0${poke.entry_number}.png`} />
								) : (
									<img src={`https://www.serebii.net/pokemongo/pokemon/${poke.entry_number}.png`} />
								)}
							</div>
						</Link>
					</div>
				);
			})
		) : (
			<p>....loading</p>
		);
		return <div>{showPokemons}</div>;
	}
}
export default Home;
