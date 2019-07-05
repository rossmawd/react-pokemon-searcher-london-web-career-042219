import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const POKEMON_URL = `http://localhost:3000/pokemon`;

class PokemonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPokemon: []
    };
  }

  componentDidMount() {
    fetch(POKEMON_URL)
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({ allPokemon: pokemon }
        );
      });
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(() => console.log("🤔"), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} />
        <br />
        <PokemonForm />
      </div>
    );
  }
}

export default PokemonPage;
