import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/EventList';
import Event from '../components/Event';

describe('<EventList /> component', () => {
  test('render correct number of events', () => {
    const EventListWrapper = shallow(<EventList />);
    EventListWrapper.setState({ events: [{}, {}, {}, {}] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });
})