// This is the core of React
import React from 'react';
// This is the part of React that draws to the browser
import ReactDOM from 'react-dom';
// MyInputField and FrequencyDistribution are React components we have defined
import MyInputField from './components/MyInputField';
import FrequencyDistribution from './components/FrequencyDistribution';

// This class will become a React component, which can be drawn to the DOM as
// you specify in the "render" method, which every React component must have.
class Container extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the state variable. "state" is a special variable in React
    this.state = {
      text: "",
      characterMap: []
    };

    // In ES6 / ES2015, these methods are not bound to instances automatically
    // so you must do it manually.
    this.onTextChange = this.onTextChange.bind(this);
    this.getCharacterMap = this.getCharacterMap.bind(this);
  }

  onTextChange(e) {
    // This is called every time the user enters a letter into the text box.
    // this.setState changes the state of the React component. React components
    // automatically ...react... to every change in state
    var newValue = e.target.value;
    this.setState({
      text: newValue,
      characterMap: this.getCharacterMap(newValue)
    });
  }

  getCharacterMap(text) {
    // This method takes a string of text from the user and
    // counts the instances of each letter of the alphabet in it

    // "text" is the input from the text field.
    // First split the characters into an array and transform them all to lowercase.
    // Second, limit them to only the letters of the Roman alphabet.
    // Third, turn the array of characters ( ['a', 'b', 'c', 'c', 'c'] )
    // into an object with character counts ( { a:1, b:1, c:3 } )
    // (The 'reduce' portion of the code does that.)
    var characters = text.split('')
      .map(char => char.toLowerCase())
      .filter(function(char){
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1;
      })
      .reduce((memo, next) => {
        memo[next] = memo[next]? memo[next] + 1 : 1;
        return memo;
      }, {});

      // Once you have the object with character counts, turn it into an array of simple objects.
      // [ { a:1 }, { b:1 }, { c:3 } ]
      var result = [];
      for (let char in characters) {
        result.push({
          character: char,
          count: characters[char]
        });
      }

      // Now sort the objects to put the highest counts first,
      // and sort objects with equal counts alphabetically
      return result.sort(function(item1, item2) {
        if (item1.count === item2.count) {
          if (item1.character === item2.character) return 0;
          return item1.character > item2.character? 1 : -1;
        }
        return item1.count < item2.count? 1 : -1;
      });
  }

  render() {
    // The HTML-like syntax here is JSX, React's JavaScript syntax extension.
    // You can also write this in vanilla JavaScript, but few people actually do.
    // MyInputField and FrequencyDistribution are React components that we have
    // defined elsewhere. Properties such as handleChange, value, and characterMap
    // are passed into these components through the "props" property. Inside the
    // components, you'd refer to them as this.props.onTextChange, for instance.
    return (
      <div>
        <MyInputField handleChange={this.onTextChange} value={this.state.text} />
        <div className="frequency-distribution-wrapper">
          <FrequencyDistribution characterMap={this.state.characterMap} />
        </div>
      </div>
    );
  }
}

// This is where the React components are actually drawn to the screen. Note
// that render is a method of ReactDOM instead of React. Facebook separated the
// core and rendering portions of React so React code can be reused for native
// applications as well as web-based ones.
ReactDOM.render(<Container />, document.getElementById('react-container'));
