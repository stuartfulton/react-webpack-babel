import React from 'react';
import ReactDOM from 'react-dom';
import MyInputField from './components/MyInputField';
import FrequencyDistribution from './components/FrequencyDistribution';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "foobar"
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(e) {
    var newValue = e.target.value;
    this.setState({
      text: newValue,
      charMap: getCharacterMap(newValue)
    });
  }

  render() {
    return (
      <div>
        <MyInputField handleChange={this.onTextChange} value={this.state.text} />
        <div className="frequency-distribution-wrapper">
          <FrequencyDistribution characterMap={this.state.charMap} />
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
function getCharacterMap(text) {
  var characterCounts = {};
  for (var i in text) {
    var character = (text[i] + "").toLowerCase();
    if (!characterCounts[character]) {
      characterCounts[character] = 1;
    } else {
      characterCounts[character] += 1;
    }
  }
  return characterCounts;
}
