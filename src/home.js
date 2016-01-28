import React from 'react';
import ReactDOM from 'react-dom';
import MyInputField from './components/MyInputField';
import FrequencyDistribution from './components/FrequencyDistribution';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      characterMap: []
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.getCharacterMap = this.getCharacterMap.bind(this);
  }

  onTextChange(e) {
    var newValue = e.target.value;
    this.setState({
      text: newValue,
      characterMap: this.getCharacterMap(newValue)
    });
  }

  getCharacterMap(text) {
    var characters = text.split('')
      .map(char => char.toLowerCase())
      .reduce((memo, next) => {
        memo[next] = memo[next]? memo[next] + 1 : 1;
        return memo;
      }, {});
      console.log("got this far in getCharacterMap");
      var result = [];
      for (let char in characters) {
        result.push({
          character: char,
          count: characters[char]
        });
      }
      console.log(result);
      return result;
  }

  render() {
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

ReactDOM.render(<Container />, document.getElementById('react-container'));

// class Container extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//       characterCounts: {}
//     };
//     this.handleKeyUp = this.handleKeyUp.bind(this);
//   }
//
//   handleKeyUp(e) {
//     var newValue = e.target.value;
//     console.log(getCharacterCounts(newValue));
//     this.setState({
//       text: newValue,
//       characterCounts: getCharacterCounts(newValue)
//     });
//   }
//
//   render() {
//     return (
//       <div>
//         <MyInputField onKeyUp={this.handleKeyUp} />
//         <div className="frequency-distribution-wrapper">
//           <FrequencyDistribution characterCounts={this.state.characterCounts} />
//         <div>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<Container />, document.getElementById('react-container'));
//
