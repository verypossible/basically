import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Card from './index';
describe('Card', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(Card, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=Card.spec.js.map