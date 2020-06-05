import React, { Component } from 'react';

class Event extends Component {
  state = {
    events: [],
  }

  render() {
    return (
      <div className="eventContainer">
        <ul className="events">
          <li className="event"></li>
        </ul>
      </div>
    );
  }
}

export default Event;