import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { mockEvents } from '../mock_events/mock-events';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When a user has not specified a number of events to be displayed, the default is "32"', ({ given, when, then }) => {
    given('a user has not selected a specific amount of events to be displayed', () => {

    });

    when('a user is viewing a list of events', () => {

    });

    then(/^the user will see “(.*)” upcoming events by default$/, (arg0) => {

    });
  });

  test('A user can change the number of events displayed', ({ given, when, then }) => {
    given('a user is viewing a list of events', () => {

    });

    when('a user changes the number of events to be displayed', () => {

    });

    then('the user should receive the same number of events specified', () => {

    });
  });

})