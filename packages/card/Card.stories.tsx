import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import info from '@basically/info';

import Card from './index';

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { Card } from 'basically'
import styled from 'styled-components'

const MyCard = styled(Card)\`
  background: blue;
  color: white;
\`;

<MyCard>I'm Customized</MyCard>
\`\`\`
`);

const stories = storiesOf('Card', module);
stories.addDecorator(withKnobs);

stories.add(
  'Documentation',
  withInfo(() => {
    return <Card>{text('children', 'Hello')}</Card>;
  }),
);
