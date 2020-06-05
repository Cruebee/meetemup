import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '../components/EventDetails';

describe('<EventDetails /> component', () => {
  let DetailsWrapper;
  beforeAll(() => {
    DetailsWrapper = shallow(<EventDetails />);
  });

  test('render event details component', () => {
    expect(DetailsWrapper.find('.details')).toHaveLength(1);
  });

});
