import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event component', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('render event wrapper', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('check event wrapper only renders overview ', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('render eventOverview', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('check eventOverview children render properly', () => {
    expect(EventWrapper.find('.eventOverview').children()).toHaveLength(3);
  });

  test('check that eventDetails children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.eventDetails--description')).toHaveLength(1);
  });

  test('check that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.eventOverview button')).toHaveLength(1);
  });

  test('check clicking details button shows event details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.eventOverview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock-data as state', () => {
    EventWrapper.setState({
      event: {
        created: 1589994536000,
        duration: 3600000,
        fee: {
          accepts: "cash",
          amount: 15,
          currency: "USD",
          description: "",
          label: "Price",
          required: false
        },
        id: "270768263",
        name: "Yoga in the Park",
        rsvp_limit: 9,
        date_in_series_pattern: false,
        status: "upcoming",
        time: 1593041400000,
        local_date: "2020-06-24",
        local_time: "17:30",
        updated: 1589994536000,
        utc_offset: -21600000,
        waitlist_count: 0,
        yes_rsvp_count: 1,
        venue: {
          id: 26920094,
          name: "Spring Park",
          lat: 40.56135177612305,
          lon: -105.07218170166016,
          repinned: true,
          address_1: "2100 Matthews Street",
          city: "Fort Collins",
          country: "us",
          localized_country_name: "USA",
          zip: "80525",
          state: "CO"
        },
        is_online_event: false,
        group: {
          created: 1588639842000,
          name: "The Mindful Movement Community",
          id: 33690668,
          join_mode: "open",
          lat: 40.529998779296875,
          lon: -105.04000091552734,
          urlname: "The-Mindful-Movement-Community",
          who: "Members",
          localized_location: "Fort Collins, CO",
          state: "CO",
          country: "us",
          region: "en_US",
          timezone: "US/Mountain"
        },
        link: "https://www.meetup.com/The-Mindful-Movement-Community/events/270768263/",
        description: "<p>** Finish your reservation using the link below. After signing up in the link provided, your spot will be held **<br/></p> <p>Warm weather signals it's time to head outside. Connect with yourself, your community, and nature in this all levels yoga class designed to leave you feeling welcomed, supported, and just the right amount of challenged. Teachers provide space for you to take rest and explore different variations of a pose, so you can choose any option that's right for you.</p> <p>Please bring your own mat and props. If you don't have a mat, a blanket would work just fine.</p> <p>During this time, we will practice social distancing guidelines, such as maintaining six feet separation. If within six feet for things like check in, we will wear a mask. Registration is required since participation is capped at 9 students. If plans change, please update your registration so people on the wait list are able to participate.</p> <p>** Finish your reservation using the link below. After signing up in the link provided, your spot will be held **<br/></p> ",
        visibility: "public",
        member_pay_fee: false
      }
    });
    expect(EventWrapper.state('event').name).toBe('Yoga in the Park');
  });

});
