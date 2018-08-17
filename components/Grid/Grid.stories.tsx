import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import info from '../../utils/storybook-info'
import Card from '../Card'
import Grid from './index'

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { Card, Grid } from 'basically'
import styled from 'styled-components'

const MyGrid = styled(Grid)\`
  background: blue;
  color: white;
\`;

<MyGrid>
  <Card>I'm Customized</Card>
  <Card>Look at Me</Card>
</MyGrid>
\`\`\`
`)

const stories = storiesOf('Components/Grid', module)
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return (
    <Grid>
      <Card>{text('card 1', 'Hello')}</Card>
      <Card>{text('card 2', 'There')}</Card>
      <Card>{text('card 3', 'Friend')}</Card>
    </Grid>
  )
}))
