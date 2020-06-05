import React, { Component, useDebugValue } from 'react';
import { privateEncrypt } from 'crypto';

class Event extends Component {
  state = {
    events: [
      /*{
         "created": 158999453600,
         "duration": 3600000,
         "fee": {
           "accepts": "cash",
           "ammount": 15,
           "currency": "USD",
           "description": "",
           "label": "Price",
           "required": false
         },
         "id": "27076823",
         "name": "Yoga in the park",
         "rsvp_limit": 9,
         "date_in_series_pattern": false,
         "status": "upcoming",
         "time": 1593041400000,
         "local_date": "2020-06-24",
         "local_time": "17:30",
         "updated": 1589994536000,
         "utc_offset": -21600000,
         "waitlist_count": 0,
         "yes_rsvp_count": 1,
         "venue": {
           "id": 26920094,
           "name": "Spring Park",
           "lat": 40.56135177612305,
           "lon": -105.07218170166016,
           "repinned": true,
           "address_1": "2100 Matthews Street",
           "city": "Fort Collins",
           "country": "us",
           "localized_country_name": "USA",
           "zip": "80525",
           "state": "CO"
         },
         "is_online_event": false,
         "group": {
           "created": 1588639842000,
           "name": "The Mindful Movement Community",
           "id": 33690668,
           "join_mode": "open",
           "lat": 40.529998779296875,
           "lon": -105.04000091552734,
           "urlname": "The-Mindful-Movement-Community",
           "who": "Members",
           "localized_location": "Fort Collins, CO",
           "state": "CO",
           "country": "us",
           "region": "en_US",
           "timezone": "US/Mountain"
         },
         "link": "'https://www.meetup.com/The-Mindful-Movement-Community/events/270768263/' ",
         "description": "Its nice out! lets social distance yoga in the park yay. ",
         "visibility": "public",
         "member_pay_fee": false
       }, */
    ],
    showDetails: false,
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Event;