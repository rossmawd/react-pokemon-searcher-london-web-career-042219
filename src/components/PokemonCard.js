import React from "react";
import { Card } from "semantic-ui-react";
import { Stats } from "fs";

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFront: true
    };
  }

  handleClick = event => {
    this.setState({ showFront: !this.state.showFront });
  };

  render() {
    const { sprites, name, stats } = this.props.poke;
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img
              alt="oh no!"
              src={this.state.showFront ? sprites.front : sprites.back}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
