import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';
import { OfflineAlert, WarningAlert } from './components/Alert';
import moment from 'moment';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  getData = () => {
    const next7Days = []; // Create empty array for next 7 days
    const currentDate = moment(); // Today 
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
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
        <ScatterChart
          width={400}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#8884d8" />
        </ScatterChart>
        <EventList events={this.state.events} />
        {this.state.noEvent && <WarningAlert text={this.state.infoText} />}
        <OfflineAlert text={this.state.offlineText} />
      </div>
    );
  }
}

export default App;
