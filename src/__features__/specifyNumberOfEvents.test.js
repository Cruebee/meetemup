import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock_events/mock-events';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('By default, when a user hansn\'t specified an amount of events to be displayed, show the default of 32', ({ given, when, then }) => {

    let AppWrapper;

    given('a user has not selected a specific amount of events to be displayed', () => {

    });

    when('a opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('a user will see a list with 32 upcoming events by default', () => {
      AppWrapper.update();
      expect((AppWrapper.find('.Event')).length).toBeLessThanOrEqual(32);
    });
  });

  test('A user can change the number of events displayed', ({ given, when, then }) => {

    let AppWrapper;

    given('opens the app', () => {
      AppWrapper = mount(<App />);
    });

    when('a user changes the amount of events to be displayed', () => {
      const number = { target: { value: 1 } };
      AppWrapper.find('.number-of-events').simulate('change', number);
    });

    then('the specified amount of events should be displayed', () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      expect(NumberOfEventsWrapper.state('number')).toBe(1);
    });
  });

});