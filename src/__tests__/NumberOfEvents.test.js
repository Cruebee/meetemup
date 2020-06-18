import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
  });

  test('render number of events input', () => {
    expect(NumberOfEventsWrapper.find('.number-of-events__input')).toHaveLength(1);
  });

  test('render number of events input properly', () => {
    const number = NumberOfEventsWrapper.state('number');
    expect(NumberOfEventsWrapper.find('.number-of-events__input').prop('value')).toBe(number);
  });

  test('default number of events is 32', () => {
    expect(NumberOfEventsWrapper.state('number')).toBe(32);
  });

  test('change state when number input changes', () => {
    NumberOfEventsWrapper.find('.number-of-events__input').simulate('change', { target: { value: 20 } });
    expect(NumberOfEventsWrapper.state('number')).toBe(20);
  });

});
