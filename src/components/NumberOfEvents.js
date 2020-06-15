import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    number: 32
  }

  onNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label className="number-label">Show </label>
        <input
          type="number"
          className="number-of-events__input"
          value={this.state.number}
          onChange={this.onNumberChange}
        />
        <label className="number-label"> Events</label>
      </div>
    );
  }
}

export default NumberOfEvents;