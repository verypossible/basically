import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import P from './index';
describe('P', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(P, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=P.spec.js.map