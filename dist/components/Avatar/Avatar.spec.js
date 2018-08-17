import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Avatar from './index';
describe('Avatar', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(Avatar, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=Avatar.spec.js.map