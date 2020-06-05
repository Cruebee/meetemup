import React from 'react';
import { shallow } from 'enzyme';
import EventList from '../components/EventList';
import Event from '../components/Event';

describe('<EventList /> component', () => {

  let EventListWrapper;
  beforeAll(() => {
    EventListWrapper = shallow(<EventList />);
  });

  test('render correct number of events', () => {
    EventListWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
    expect(EventListWrapper.find(Event)).toHaveLength(4);
  });

})
