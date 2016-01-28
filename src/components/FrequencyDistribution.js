import React from 'react';

export default class FrequencyDistribution extends React.Component {
  constructor(props) {
    super(props);
    this.displayCharacter = this.displayCharacter.bind(this);
  }

  displayCharacter(item) {
    return (
      <div>
        <span>{item.character}</span>
        <span>{item.count}</span>
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
