import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock_events/mock-events';
import App from '../App';

const feature = loadFeature('./src/__features__/showHideAnEventDetails.feature');

defineFeature(feature, test => {

  test('An Event Element Is Collapsed By Default', ({ given, and, when, then }) => {

    let AppWrapper;

    given('the user has not expanded an event', () => {

    });

    and('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('a list of events for that location is displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    then('the events details are collapsed by default', () => {
      expect(AppWrapper.find('expanded')).toHaveLength(0);
    });
  });

  test('A User Can Expand An Event To See Its Details', ({ given, and, when, then }) => {

    let AppWrapper;

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });

    when('a user clicks on the event Details button', () => {
      AppWrapper.find('Event .details-btn').at(0).simulate('click');
    });

    then('the details for that event will be expanded', () => {
      expect(AppWrapper.find('.Event .extra')).toHaveLength(1);
    });
  });

  test('A User Can Collapse An Event To Hide Its Details', ({ given, and, when, then }) => {
    let AppWrapper;

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the user has expanded the details of an event', () => {
      AppWrapper.update();
      AppWrapper.find('.Event .details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.Event .extra')).toHaveLength(1);
    });

    when('the user clicks on the Details button again', () => {
      AppWrapper.find('.Event .details-btn').at(0).simulate('click');
    });

    then('the extra details for that event will be collapsed', () => {
      expect(AppWrapper.find('.Event .extra')).toHaveLength(0);
    });
  });

});