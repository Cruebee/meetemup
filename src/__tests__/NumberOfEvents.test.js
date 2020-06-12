import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test('render textbox for user input', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
  });

  test('check number of events is 32 by default', () => {
    const numberOfEvents = NumberOfEventsWrapper.state('numberOfEvents');
    expect(NumberOfEventsWrapper.find('.numberOfEvents__input').prop('value')).toBe(numberOfEvents);
  });

  test('check that state changes when input changes', () => {
    const eventObject = { target: { value: 32 } };
    NumberOfEventsWrapper.find('.numberOfEvents__input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(32);
  });

  test('check that state changes when input changes', () => {
    const eventObject = { target: { value: 24 } };
    NumberOfEventsWrapper.find('.numberOfEvents__input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(24);
  });

  test('render number of events input label', () => {
    expect(NumberOfEventsWrapper.find('.numberOfEvents label')).toHaveLength(2);
  });

});
