var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import info from '../../utils/storybook-info';
import Button from './index';
var withInfo = info("\n### Notes\n\nThis is standard button from the styled components library. All props that a\nreact button uses apply.\n\n### Customization\n\n```\nimport { Button } from 'basically'\nimport styled from 'styled-components'\n\nconst MyButton = styled(Button)`\n  background: blue;\n  color: white;\n`;\n\n<MyButton>Click Me</MyButton>\n```\n");
var stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return React.createElement(Button, null, text('children', 'Hello'));
}));
stories.add('Sample', function () {
    return React.createElement(Button, null, text('children', 'Hello'));
});
stories.add('Customized', function () {
    var MyButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border: none;\n    background: blue;\n    color: white;\n  "], ["\n    border: none;\n    background: blue;\n    color: white;\n  "])));
    return React.createElement(MyButton, null, text('children', 'I\'m custom'));
});
var templateObject_1;
//# sourceMappingURL=Button.stories.js.map