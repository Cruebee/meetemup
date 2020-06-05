import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('render event component container', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render events with details hidden by default', () => {
    expect(EventWrapper.state('showDetails')).toBe(false);
  });

})