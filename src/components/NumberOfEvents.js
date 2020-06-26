import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    number: 32,
  }

  onNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);

    if (value < 1) {
      this.setState({ errorText: 'Number must be at least 1' });
    } else {
      this.setState({ errorText: '' });
    }
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        <label className="number-label">Show </label>
        <input
          type="number"
          className="number-of-events"
          value={this.state.number}
          onChange={this.onNumberChange}
        />
        <label className="number-label"> Events</label>
      </div>
    );
  }
}

export default NumberOfEvents;