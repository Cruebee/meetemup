import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import CitySearch from '../components/CitySearch';
import { mockEvents } from '../mock_events/mock-events';

const feature = loadFeature('./src/__features__/filterEventsByCity.feature');

defineFeature(feature, test => {

  test('By default, when user hasn\'t searched for a city, show upcoming events based on the user\'s location', ({ given, when, then }) => {
    given('user hasn\'t searched for any city', () => {

    });

    let AppWrapper;
    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then('the user should see the list of upcoming events from their location', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

  let CitySearchWrapper;
  test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
    given('the main page is open', () => {
      CitySearchWrapper = shallow(<CitySearch />);
    });

    when('the user starts typing in the textbox', () => {
      CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Munich' } });
    });

    then('the user should receive a list of cities (suggestions) that match what they\'ve typed', () => {
      expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });
  });

  test('User can select a city from the list of suggestions', ({ given, and, when, then }) => {

    let AppWrapper;
    given('a user is typing “Munich” in the city textbox', () => {
      AppWrapper = mount(<App />);
      AppWrapper.find('.city').simulate('change', { target: { value: 'Munich' } });
    });

    and('the list of suggested cities is showing', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
    });

    when('the user selects a city (e.g., “Munich, Germany”) from the list', () => {
      AppWrapper.find('.suggestions li').at(0).simulate('click');
    });

    then('their city should be changed to the selected city (i.e., “Munich, Germany”)', () => {
      const CitySearchWrapper = AppWrapper.find(CitySearch);
      expect(CitySearchWrapper.state('query')).toBe('Munich, Germany');
    });

    and('the user should receive a list of upcoming events for that city', () => {
      expect(AppWrapper.find('.Event')).toHaveLength(mockEvents.events.length);
    });
  });

});