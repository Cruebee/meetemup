import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import { mockEvents } from '../mock_events/mock-events';
import App from '../App';
import Event from '../components/Event';

const feature = loadFeature('./src/__features__/showHideAnEventDetails.feature');

defineFeature(feature, test => {

  test('An Event Element Is Collapsed By Default', ({ given, when, then }) => {
    given('the user has selected a city, or is using their location', () => {

    });

    when('a list of events for that location are displayed', () => {

    });

    then('the events details are collapsed by Default', () => {

    });
  });

  test('A User Can Expand An Event To See Its Details', ({ given, when, then }) => {
    given('a list of events is displayed', () => {

    });

    when('a user clicks on the event Details button', () => {

    });

    then('the event the user clicked on will be expanded to show extra details', () => {

    });
  });

  test('A User Can Collapse An Event To Hide Its Details', ({ given, when, then }) => {
    given('an event element has been expanded', () => {

    });

    when('the user clicks on the Details button', () => {

    });

    then('the events extra details will be collapsed', () => {

    });
  });

});