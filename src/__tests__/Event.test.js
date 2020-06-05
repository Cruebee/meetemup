import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event component container', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render events with details hidden by default', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

  test('render events correctly', () => {
    const events = EventWrapper.state('events');
    expect(EventWrapper.find('.eventDetails li')).toHaveLength(events.length);
    for (let i = 0; i < events.length; i += 1) {
      expect(EventWrapper.find('.eventDetails li').at(i).text()).toBe(events[i].name);
    }
  });

  test('render evend details button', () => {
    expect(EventWrapper.find('.eventButton')).toHaveLength(1);
  });

})