import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;