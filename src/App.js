import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert, WarningAlert } from './components/Alert';

class App extends Component {

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    infoText: '',
    offlineText: ''
  }

  componentDidMount() {
    this.updateEvents();
    this.noEvent();
    window.addEventListener('online', this.offLineAlert());
  }

  offLineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText: 'You appear to be offline, this list is cached. Please connect to the internet for an updated list.'
      });
    } else {
      this.setState({
        offlineText: '',
      });
    }
  }


  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }
  noEvent = () => {
    if (this.state.events.length === 0) {
      this.setState({
        infoText: 'This city isn\'t hosting any events right now, try another city.'
      });
    } else {
      this.setState({
        infoText: ''
      })
    }
  }


  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        {this.state.noEvent && <WarningAlert text={this.state.infoText} />}
        <OfflineAlert text={this.state.offlineText} />
      </div>
    );
  }
}

export default App;
