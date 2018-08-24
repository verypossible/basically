import * as React from 'react';

import { shallow } from 'enzyme';
import 'jest-styled-components';

import Card from './index';

describe('Card', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Card>Hi There</Card>);
    expect(tree).toMatchSnapshot();
  });
});
