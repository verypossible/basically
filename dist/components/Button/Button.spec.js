import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from './index';
describe('Button', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(Button, null, "Click Me"));
        expect(tree).toMatchSnapshot();
    });
    it('can be clicked', function () {
        var onClick = jest.fn();
        var tree = shallow(React.createElement(Button, { onClick: onClick }, "Click Me"));
        tree.find('button').simulate('click');
        expect(onClick.mock.calls.length).toBe(1);
    });
});
//# sourceMappingURL=Button.spec.js.map