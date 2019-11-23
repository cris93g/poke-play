import React, { Component } from 'react';
import axios from 'axios';
import './Description.css';
class Description extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemon: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/specific`, {
				id: this.props.match.params.name
			})
			.then((results) => {
				this.setState({ pokemon: results.data });
			});
	}
	render() {
		const { pokemon } = this.state;
		console.log(pokemon);
		return (
			<div>
				{pokemon.id ? (
					<div className="desc-main">
						<h1 className="title">{pokemon.names[2].name}</h1>

						<div className="pokemon-icon">
							{pokemon.id.toString().length < 3 ? pokemon.id.toString().length == 1 ? (
								<img src={`https://www.serebii.net/pokemongo/pokemon/00${pokemon.id}.png`} />
							) : (
								<img src={`https://www.serebii.net/pokemongo/pokemon/0${pokemon.id}.png`} />
							) : (
								<img src={`https://www.serebii.net/pokemongo/pokemon/${pokemon.id}.png`} />
							)}
						</div>
						<div className="egg-group">
							{pokemon.egg_groups.map((egg) => {
								return (
									<div>
										<p>{egg.name}</p>
									</div>
								);
							})}
						</div>
						<p>Description:{pokemon.flavor_text_entries[1].flavor_text}</p>
					</div>
				) : (
					'dad'
				)}
			</div>
		);
	}
}

export default Description;
