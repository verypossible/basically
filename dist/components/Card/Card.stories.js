import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import globalStyles from '../../utils/global-styles';
import info from '../../utils/storybook-info';
import Card from './index';
globalStyles();
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { Card } from 'basically'\nimport styled from 'styled-components'\n\nconst MyCard = styled(Card)`\n  background: blue;\n  color: white;\n`;\n\n<MyCard>I'm Customized</MyCard>\n```\n");
var stories = storiesOf('Components/Card', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return React.createElement(Card, null, text('children', 'Hello'));
}));
//# sourceMappingURL=Card.stories.js.map