import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label>Number of Events: </label>
        <input
          type="text"
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default NumberOfEvents;