import React, { Component } from 'react';

class Event extends Component {
  state = {
    events: [],
    showDetails: false,
  }

  render() {
    return (
      <div>
        <ul>
          <li className="event"></li>
        </ul>
      </div>
    );
  }
}

export default Event;