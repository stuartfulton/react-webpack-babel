// This is the core of React. ReactDOM is not loaded here because we're not
// rendering to the DOM in this file.
import React from 'react';

// This simple React component has no internal state. It draws a text field,
// renders a value inside it, and when the value changes, triggers whatever
// event handler you send as the "handleChange" attribute when you reference
// the component. e.g. <MyInputField value={myText} handleChange={myEventHandler} />
export default class MyInputField extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input className="text-field-large" type="text" value={this.props.value} onChange={this.props.handleChange} />
    );
  }
}
