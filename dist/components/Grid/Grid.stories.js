import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import info from '../../utils/storybook-info';
import Card from '../Card';
import Grid from './index';
var withInfo = info("\n### Notes\n\nThe notes need to be updated for the new component.\n\n### Customization\n\n```\nimport { Card, Grid } from 'basically'\nimport styled from 'styled-components'\n\nconst MyGrid = styled(Grid)`\n  background: blue;\n  color: white;\n`;\n\n<MyGrid>\n  <Card>I'm Customized</Card>\n  <Card>Look at Me</Card>\n</MyGrid>\n```\n");
var stories = storiesOf('Components/Grid', module);
stories.addDecorator(withKnobs);
stories.add('Documentation', withInfo(function () {
    return (React.createElement(Grid, null,
        React.createElement(Card, null, text('card 1', 'Hello')),
        React.createElement(Card, null, text('card 2', 'There')),
        React.createElement(Card, null, text('card 3', 'Friend'))));
}));
//# sourceMappingURL=Grid.stories.js.map