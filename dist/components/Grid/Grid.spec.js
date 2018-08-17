import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Grid from './index';
describe('Grid', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(Grid, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=Grid.spec.js.map