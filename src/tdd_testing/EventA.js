import React, { Component } from 'react';

class EventA extends Component {

  state = {
    event: {
      name: "Yoga in the Park",
      time: "17:00"
    }
  }

  render() {
    return (
      <ul
        type="text"
        className="name"
      >{this.state.event.name}
        <li
          type="text"
          className="time"
        >{this.state.event.time}
        </li>
      </ul>
    );
  }
}

export default EventA;