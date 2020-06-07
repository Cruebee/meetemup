import React, { Component } from 'react';

class Event extends Component {

  state = {
    event: {},
    showDetails: false
  }

  handleShowDetails = () => {
    this.setState({ showDetails: true });
  }

  render() {
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="eventOverview">
          <p className="eventOverview--name">{this.state.event.name}</p>
          <p className="eventOverview--localDate">{this.state.event.local_date}</p>
          <button onClick={() => this.handleShowDetails()}>Event Details</button>
        </div>
        {showDetails &&
          <div className="eventDetails">
            <p className="eventDetails--description">{this.state.event.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default Event;