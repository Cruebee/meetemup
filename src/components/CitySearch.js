import React, { Component } from 'react';
import { getSuggestions } from '../api';
import { InfoAlert, OfflineAlert } from './Alert';

class CitySearch extends Component {

  state = {
    query: '',
    suggestions: [],
    infoText: '',
    offlineText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    });

    if (event.target.value === '') {
      this.setState({
        showSuggestion: false
      });
    } else {
      getSuggestions(value).then(suggestions => {
        this.setState({
          showSuggestion: true,
          suggestions: suggestions,
        });

        if (value.length >= 3 && suggestions.length === 0) {
          this.setState({
            infoText: 'We can\'t locate the city you are searching for. Please try another city.',
          });
        } else {
          this.setState({
            infoText: ''
          });
        }
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineText: 'You appear to be offline. Please reconnect to the internet to search for new events and cities.'
      });
    } else {
      this.setState({
        offlineText: ''
      });
    }
  }

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  }

  render() {
    return (
      <div className="CitySearch">
        <div className="alert-container">
          <InfoAlert className="info-alert" text={this.state.infoText} />
          <OfflineAlert className="info-alert" text={this.state.infoText} />
        </div>
        <label className="search-label">City Search</label>
        <input
          type="text"
          className="city"
          value={this.state.query}
          onChange={this.handleInputChanged}
          placeholder="Change City"
        >
        </input>
        <ul className="suggestions">
          {this.state.suggestions.map(item =>
            <li
              key={item.name_string}
              onClick={() => this.handleItemClicked(item.name_string, item.lat, item.lon)}
            >{item.name_string}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default CitySearch;