import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={
      {
        created: 15911614589000,
        duration: 720000,
        id: '271160041',
        name: 'Saturday morning squash in Parkclub Nymphenburg',
        rsvp_limit: 3,
        date_in_series_pattern: false,
        status: 'upcoming',
        time: 1592063100000,
        local_date: '2020-06-13',
        local_time: '10:15',
        updated: 159416321000,
        utc_offset: 7200000,
        waitlist_count: 0,
        yes_rsvp_count: 3,
        venue: {
          id: 2578898,
          name: 'Park Club Nymphenburg',
          lat: 48.160325452,
          lon: 11.515665862,
          repinned: false,
          address_1: 'Stievestrasse 15, 80638',
          city: 'München',
          country: 'de',
          localized_country_name: 'Germany'
        },
        group: {
          name: 'Casual Squash Games'
        },
        link: 'https://www.meetup.com/Casual-Squash-Games/events/271160041/',
        description: '<p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p>',
        visibility: 'public',
        member_pay_fee: false
      }
    } />
    );

  });

  beforeEach(() => {
    EventWrapper.setState({ expanded: false });
  });

  test('render information about events', () => {
    expect(EventWrapper.find('.Event')).toHaveLength(1);
    expect(EventWrapper.find('.time')).toHaveLength(1);
    expect(EventWrapper.find('.name')).toHaveLength(1);
    expect(EventWrapper.find('.going')).toHaveLength(1);
  });

  test('render correct information about events', () => {
    expect(EventWrapper.find('.time').text()).toEqual('10:15 - 2020-06-13');
    expect(EventWrapper.find('.name').text()).toEqual('Saturday morning squash in Parkclub Nymphenburg');
    expect(EventWrapper.find('.going').text()).toEqual('3 people are attending');
  });

  test('expand additional event detals when user clicks on "Details" button', () => {
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.find('.extra')).toHaveLength(1);
  });

  test('collapse additional event details when user clicks on "Details" button', () => {
    EventWrapper.setState({ expanded: true });
    EventWrapper.find('.details-button').simulate('click');
    expect(EventWrapper.find('.extra')).toHaveLength(0);
  });

  test('render additional event details', () => {
    EventWrapper.setState({ expanded: true });
    expect(EventWrapper.find('.extra .address')).toHaveLength(1);
    expect(EventWrapper.find('.extra .visibility')).toHaveLength(1);
    expect(EventWrapper.find('.extra .link')).toHaveLength(1);
    expect(EventWrapper.find('.extra .description')).toHaveLength(1);
  });

  test('render additonal event details with correct info', () => {
    EventWrapper.setState({ expanded: true });
    expect(EventWrapper.find('.extra .address').text()).toEqual('Park Club Nymphenburg, Stievestrasse 15, 80638, München, Germany'); // this should display all the information a user would need to find this location, these are all venue attributes: event.venue.name, event.venue.address_1, event.venue.city, event.venue.localized_country_name.
    expect(EventWrapper.find('.extra .visibility').text()).toEqual('public');
    expect(EventWrapper.find('.extra .link').prop('href')).toEqual('https://www.meetup.com/Casual-Squash-Games/events/271160041/');
    expect(EventWrapper.find('.extra .description').html()).toEqual('<div class=\"description\"><p>All levels are welcome!</p> <p>We meet at the entrance of Parkclub Nymphenburg at 10:00.<br/>There is 1 court (2-3 people) booked from 10:15 till 11:45<br/>If there are no slots left, use waitlist, we can try to book another court</p> <p>Important: Cancellation is free for 48 hours in advance. So if you RSVP and cannot come, please let me know, so I can cancel the court.<br/>Cancellations on short notice should be paid, to cover court costs.</p></div>');
  });

});
