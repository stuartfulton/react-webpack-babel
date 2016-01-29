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
      .filter(function(char){
        return 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) !== -1;
      })
      .reduce((memo, next) => {
        memo[next] = memo[next]? memo[next] + 1 : 1;
        return memo;
      }, {});
      var result = [];
      for (let char in characters) {
        result.push({
          character: char,
          count: characters[char]
        });
      }
      return result.sort(function(item1, item2) {
        if (item1.count === item2.count) {
          if (item1.character === item2.character) return 0;
          return item1.character > item2.character? 1 : -1;
        }
        return item1.count < item2.count? 1 : -1;
      });
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
