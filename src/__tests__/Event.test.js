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

  test('render event name', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render event description', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

})