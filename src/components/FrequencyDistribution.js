import React from 'react';

export default class FrequencyDistribution extends React.Component {
  constructor(props) {
    super(props);
    this.displayCharacter = this.displayCharacter.bind(this);
  }

  displayCharacter(item) {
    return (
      <div className="bar">
        <span className="character-name">{item.character}</span>
        <span className="character-count">{item.count}</span>
      </div>
    );
  }

  render() {
    console.log(this.props.characterMap);
    return (
      <div>
        {
          this.props.characterMap.map(this.displayCharacter)
        }
      </div>
    );
  }
}
