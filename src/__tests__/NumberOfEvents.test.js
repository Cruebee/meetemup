import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render number of events', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events')).toHaveLength(1);
  });

  test('render number of events input properly', () => {
    const number = NumberOfEventsWrapper.state('number');
    expect(NumberOfEventsWrapper.find('.number-of-events').prop('value')).toBe(number);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.find('.number-of-events').simulate('change', { target: { value: 20 } });
    expect(NumberOfEventsWrapper.state('number')).toBe(20);
  });

});
