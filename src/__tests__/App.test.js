import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberOfEvents', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });

});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  test('get list of events after user selects a city', async () => {
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value');
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
  });

});