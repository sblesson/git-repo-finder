import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils';
import TableHeader from './index';

const setUp = (props = {}) => {
  const component = shallow(<TableHeader {...props} />);
  return component;
};

describe('TableHeader Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAtrr(component, 'tableHeaderComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a title id', () => {
    const title = findByTestAtrr(component, 'tableHeaderId');
    expect(title.length).toBe(1);
  });

  it('Should render a title name', () => {
    const title = findByTestAtrr(component, 'tableHeaderName');
    expect(title.length).toBe(1);
  });

  it('Should render a title full name', () => {
    const title = findByTestAtrr(component, 'tableHeaderFullName');
    expect(title.length).toBe(1);
  });

  it('Should render a title home page', () => {
    const title = findByTestAtrr(component, 'tableHeaderHomePage');
    expect(title.length).toBe(1);
  });
  it('Should render a title header URL', () => {
    const title = findByTestAtrr(component, 'tableHeaderURL');
    expect(title.length).toBe(1);
  });
});
