import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { H1 } from './index';
describe('Heading', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(H1, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=Heading.spec.js.map