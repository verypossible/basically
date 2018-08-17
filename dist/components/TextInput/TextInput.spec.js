import * as React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import TextInput from './index';
describe('TextInput', function () {
    it('matches the snapshot', function () {
        var tree = shallow(React.createElement(TextInput, null, "Hi There"));
        expect(tree).toMatchSnapshot();
    });
});
//# sourceMappingURL=TextInput.spec.js.map