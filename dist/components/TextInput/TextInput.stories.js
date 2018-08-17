import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import info from '../../utils/storybook-info';
import TextInput from './index';
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { TextInput } from 'basically'\nimport styled from 'styled-components'\n\nconst MyTextInput = styled(TextInput)`\n  background: blue;\n  color: white;\n`;\n\n<MyTextInput placeholder=\"I'm Customized\" />\n```\n");
var stories = storiesOf('Components/TextInput', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return React.createElement(TextInput, { placeholder: text('children', 'Hello') });
}));
//# sourceMappingURL=TextInput.stories.js.map