import React from 'react';
import { shallow } from 'enzyme';
import EventA from './EventA';

describe('EventA /> component', () => {

  let EventAWrapper;
  beforeAll(() => {
    EventAWrapper = shallow(<EventA />);
  });

  test('render EventA detals container', () => {
    expect(EventAWrapper).toHaveLength(1);
  });

  test('render Event component with correct name', () => {
    expect(EventAWrapper.find('.name').text()).toBe('Yoga in the Park');
  });

  test('render EventA component with correct time', () => {
    expect(EventAWrapper.find('.time').text()).toBe('17:00');
  });

});