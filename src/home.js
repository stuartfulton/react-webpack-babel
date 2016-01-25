import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>Hello world! (react)</div>);
  }
}

ReactDOM.render(<Example />, document.getElementById('react-container'));
