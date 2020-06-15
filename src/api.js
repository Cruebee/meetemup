import { mockEvents } from './mock_events/mock-events';
import axios from 'axios';

// API Auth Token Functions
async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === 'get') {
    // Lambda endpoint to get token by code
    url = 'https://b8irz6xb5a.execute-api.us-east-2.amazonaws.com/dev/api/token/' + key;
  } else if (type === 'renew') {
    // Lambda endpoint to renew token by refresh_token
    url = 'https://b8irz6xb5a.execute-api.us-east-2.amazonaws.com/dev/api/refresh/' + key;
  }

  // Use Axios to make a GET request to the endpoint
  const tokenInfo = await axios.get(url);

  // Save tokens to localStorage together with a timestamp
  localStorage.setItem('access_token', tokenInfo.data.access_token);
  localStorage.setItem('refresh_token', tokenInfo.data.refresh_token);
  localStorage.setItem('last_saved_time', Date.now());

  // Return the access_token
  return tokenInfo.data.access_token;
}

async function getAccessToken() {
  const accessToken = localStorage.getItem('access_token');

  // If no access_token is found
  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    // If no code is found the user needs to be redirected to get it
    if (!code) {
      window.location.href = 'https://secure.meetup.com/oauth2/authorize'
        + '?client_id=10l1jtlp01s1lj83me59sso5kh'
        + '&response_type=code'
        + '&redirect_uri=https://cruebee.github.io/meetemup/';
      return null;
    }
    return getOrRenewAccessToken('get', code);
  }

  // Check if access_token is still valid
  const lastSavedTime = localStorage.getItem('last_saved_time');
  // Date.now() returns a timestamp in milleseconds, one hour = 3,600,000
  if (accessToken && (Date.now() - lastSavedTime < 3600000)) {
    return accessToken;
  }

  // If access_token is expired, renew it using refresh_token
  const refreshToken = localStorage.getItem('refresh_token');
  return getOrRenewAccessToken('renew', refreshToken);

}

// API Event Functions
async function getSuggestions(query) {
  if (window.location.href.startsWith('http://localhost')) {
    return [
      {
        city: 'Munich',
        country: 'de',
        localized_country_name: 'Germany',
        name_string: 'Munich, Germany',
        zip: 'meetup3',
        lat: 48.14,
        lon: 11.58
      },
      {
        city: 'Munich',
        country: 'us',
        localized_country_name: 'USA',
        state: 'ND',
        name_string: 'Munich, North Dakota, USA',
        zip: '58352',
        lat: 48.66,
        lon: -98.85
      }
    ];
  }

  const token = await getAccessToken();
  if (token) {
    const url = 'https://api.meetup.com/find/locations?&sign=true&photo-host=public&query='
      + query
      + '&access_token=' + token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon, page) {
  if (window.location.href.startsWith('http://localhost')) {
    return mockEvents.events;
  }

  // Check for an access_token
  const token = await getAccessToken();
  if (token) {
    let url = 'https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public'
      + '&access_token=' + token;
    // lat and lon is optional; if you have them you can add them
    if (lat && lon) {
      url += '&lat=' + lat + '&lon=' + lon;
    }
    // page is also optional, if page is available, add it
    if (page) {
      url += '&page=' + page;
    }
    const result = await axios.get(url);
    return result.data.events;
  }
  return [];
}

export { getSuggestions, getEvents };
