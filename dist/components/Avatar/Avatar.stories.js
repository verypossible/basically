var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { H2 } from '../Heading';
import info from '../../utils/storybook-info';
import Avatar from './index';
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { Avatar } from 'basically'\nimport styled from 'styled-components'\n\nconst MyAvatar = styled(Avatar)`\n  width: 50%;\n`;\n\n<MyAvatar />\n```\n");
var stories = storiesOf('Components/Avatar', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return React.createElement(Avatar, { round: boolean('round', false), src: text('src', 'https://placeimg.com/640/480/animals') });
}));
stories.add('Different Sizes', function () {
    var BigAvatar = styled(Avatar)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 15rem;\n    height: 15rem\n    display: inline-block;\n    margin-right: 1rem;\n  "], ["\n    width: 15rem;\n    height: 15rem\n    display: inline-block;\n    margin-right: 1rem;\n  "])));
    var MedAvatar = styled(Avatar)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 10rem;\n    height: 10rem\n    display: inline-block;\n    margin-right: 1rem;\n  "], ["\n    width: 10rem;\n    height: 10rem\n    display: inline-block;\n    margin-right: 1rem;\n  "])));
    var RegAvatar = styled(Avatar)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: inline-block;\n    margin-right: 1rem;\n  "], ["\n    display: inline-block;\n    margin-right: 1rem;\n  "])));
    return (React.createElement("div", null,
        React.createElement(H2, null, "15rem"),
        React.createElement(BigAvatar, { round: true }),
        React.createElement(BigAvatar, null),
        React.createElement("hr", null),
        React.createElement(H2, null, "10rem"),
        React.createElement(MedAvatar, { round: true }),
        React.createElement(MedAvatar, null),
        React.createElement("hr", null),
        React.createElement(H2, null, "Standard Size"),
        React.createElement(RegAvatar, { round: true }),
        React.createElement(RegAvatar, null)));
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Avatar.stories.js.map