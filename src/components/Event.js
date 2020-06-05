import React, { Component } from 'react';

class Event extends Component {
  state = {

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