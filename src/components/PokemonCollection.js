import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        
        {this.props.allPokemon.map((poke, index) => {
          return <PokemonCard key={index} poke={poke} />;
        })}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
