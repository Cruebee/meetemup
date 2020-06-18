import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import { mockEvents } from '../mock_events/mock-events';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/__features__/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

});