import * as React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';

import info from '@basically/info';

import Button from './index';

const withInfo = info(`
### Notes

This is standard button from the styled components library. All props that a
react button uses apply.

### Customization

\`\`\`
import { Button } from 'basically'
import styled from 'styled-components'

const MyButton = styled(Button)\`
  background: blue;
  color: white;
\`;

<MyButton>Click Me</MyButton>
\`\`\`
`);

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.add(
  'Documentation',
  withInfo(() => {
    return <Button>{text('children', 'Hello')}</Button>;
  }),
);

stories.add('Sample', () => {
  return <Button>{text('children', 'Hello')}</Button>;
});

stories.add('Customized', () => {
  const MyButton = styled(Button)`
    border: none;
    background: blue;
    color: white;
  `;

  return <MyButton>{text('children', "I'm custom")}</MyButton>;
});
