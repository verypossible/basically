import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import info from '../../utils/storybook-info';
import { H1, H2, H3, H4, H5, H6 } from './index';
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { H1 } from 'basically'\nimport styled from 'styled-components'\n\nconst MyHeading = styled(H1)`\n  background: blue;\n  color: white;\n`;\n\n<H1>I'm Customized</H1>\n```\n");
var stories = storiesOf('Components/Heading', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return (React.createElement("div", null,
        React.createElement(H1, null, text('heading 1', 'Header 1')),
        React.createElement(H2, null, text('heading 2', 'Header 2')),
        React.createElement(H3, null, text('heading 3', 'Header 3')),
        React.createElement(H4, null, text('heading 4', 'Header 4')),
        React.createElement(H5, null, text('heading 5', 'Header 5')),
        React.createElement(H6, null, text('heading 6', 'Header 6'))));
}));
//# sourceMappingURL=Heading.stories.js.map