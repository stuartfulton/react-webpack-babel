import React from 'react';

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
