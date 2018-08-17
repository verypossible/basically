import * as React from 'react'

import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import info from '../../utils/storybook-info'
import { H2 } from '../Heading'
import Avatar from './index'

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { Avatar } from 'basically'
import styled from 'styled-components'

const MyAvatar = styled(Avatar)\`
  width: 50%;
\`;

<MyAvatar />
\`\`\`
`)

const stories = storiesOf('Components/Avatar', module)
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return <Avatar
    round={boolean('round', false)}
    src={text('src', 'https://placeimg.com/640/480/animals')}
    />
}))

stories.add('Different Sizes', () => {
  const BigAvatar = styled(Avatar)`
    width: 15rem;
    height: 15rem
    display: inline-block;
    margin-right: 1rem;
  `
  const MedAvatar = styled(Avatar)`
    width: 10rem;
    height: 10rem
    display: inline-block;
    margin-right: 1rem;
  `
  const RegAvatar = styled(Avatar)`
    display: inline-block;
    margin-right: 1rem;
  `

  return (
    <div>
      <H2>15rem</H2>
      <BigAvatar round />
      <BigAvatar />
      <hr />
      <H2>10rem</H2>
      <MedAvatar round />
      <MedAvatar />
      <hr />
      <H2>Standard Size</H2>
      <RegAvatar round />
      <RegAvatar />
    </div>
  )
})
