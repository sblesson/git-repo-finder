import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils';
import RepoItem from './index';

describe('RepoItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        full_name: 'Example Title',
        url: 'Some text',
      };
      const propsError = checkProps(RepoItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        full_name: 'Example Title',
        url: 'Some text',
      };
      wrapper = shallow(<RepoItem {...props} />);
    });

    it('Should renders without error', () => {
      const component = findByTestAtrr(wrapper, 'repoItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a repo item id', () => {
      const title = findByTestAtrr(wrapper, 'repoItemId');
      expect(title.length).toBe(1);
    });

    it('Should render a name', () => {
      const title = findByTestAtrr(wrapper, 'repoItemName');
      expect(title.length).toBe(1);
    });

    it('Should render a full name', () => {
      const title = findByTestAtrr(wrapper, 'repoItemFullName');
      expect(title.length).toBe(1);
    });

    it('Should render repo item home page', () => {
      const title = findByTestAtrr(wrapper, 'repoItemHomePage');
      expect(title.length).toBe(1);
    });

    it('Should render a url', () => {
      const desc = findByTestAtrr(wrapper, 'repoItemURL');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        url: 'Some text',
      };
      wrapper = shallow(<RepoItem {...props} />);
    });

    it('Component is not rendered', () => {
      const component = findByTestAtrr(wrapper, 'repoItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
