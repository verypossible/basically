import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import info from '../../utils/storybook-info'
import { H1, H2, H3, H4, H5, H6 } from './index'

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { H1 } from 'basically'
import styled from 'styled-components'

const MyHeading = styled(H1)\`
  background: blue;
  color: white;
\`;

<H1>I'm Customized</H1>
\`\`\`
`)

const stories = storiesOf('Components/Heading', module)
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return (
    <div>
      <H1>{text('heading 1', 'Header 1')}</H1>
      <H2>{text('heading 2', 'Header 2')}</H2>
      <H3>{text('heading 3', 'Header 3')}</H3>
      <H4>{text('heading 4', 'Header 4')}</H4>
      <H5>{text('heading 5', 'Header 5')}</H5>
      <H6>{text('heading 6', 'Header 6')}</H6>
    </div>
  )
}))
