import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import info from '../../utils/storybook-info'
import TextInput from './index'

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { TextInput } from 'basically'
import styled from 'styled-components'

const MyTextInput = styled(TextInput)\`
  background: blue;
  color: white;
\`;

<MyTextInput placeholder="I'm Customized" />
\`\`\`
`)

const stories = storiesOf('Components/TextInput', module)
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return <TextInput placeholder={text('children', 'Hello')} />
}))
