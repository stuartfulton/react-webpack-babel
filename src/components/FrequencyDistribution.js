// This is the core of React. ReactDOM is not loaded here because we're not
// rendering to the DOM in this file.
import React from 'react';

// This simple React component has no internal state. It renders a series of
// divs displaying a character and listing how many times that character
// appears in the entered text. Actually, by the time the text gets to this
// component, it has already been processed into an array of objects like this:
// [ { a:1 }, { b:2 }, { c:3 } ]
export default class FrequencyDistribution extends React.Component {
  constructor(props) {
    super(props);
    this.displayCharacter = this.displayCharacter.bind(this);
  }

  displayCharacter(item) {
    // This helper is called for each item in this.props.characterMap
    // "key" is a special property that must be unique per item in order
    // to help React manage which DOM elements to keep and destroy for
    // optimal performance. If it is absent. React will warn you in the console.
    return (
      <div className="character-display" key={item.character}>
        <span className="character-name">{item.character}</span>
        <span className="character-count">{item.count}</span>
      </div>
    );
  }

  render() {
    // Simpy render a div with the css class "character-results", and fill it
    // with the elements defined in displayCharacter for every item in the array
    // you send to characterMap when you call this component.
    // e.g. <FrequencyDistribution characterMap={myArrayOfObjects} />
    return (
      <div className="character-results">
        {
          this.props.characterMap.map(this.displayCharacter)
        }
      </div>
    );
  }
}
