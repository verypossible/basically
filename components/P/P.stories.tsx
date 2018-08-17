import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import info from '../../utils/storybook-info'
import P from './index'

const withInfo = info(`
### Notes

The notes need to be updated for the new component.

### Customization

\`\`\`
import { P } from 'basically'
import styled from 'styled-components'

const MyP = styled(P)\`
  background: blue;
  color: white;
\`;

<MyP>I'm Customized</MyP>
\`\`\`
`)

const stories = storiesOf('Components/P', module)
const paragraph = `
Bacon ipsum dolor amet pork landjaeger shankle bresaola short ribs. Flank strip steak drumstick kevin, buffalo brisket
sausage beef. Ball tip shoulder prosciutto pork belly meatball, ribeye picanha pork chop burgdoggen brisket frankfurter
ground round hamburger bacon. Pork loin tri-tip strip steak prosciutto ribeye flank shankle kielbasa cow brisket. Corned
beef pork shank shoulder meatball landjaeger leberkas turkey, jerky turducken ground round beef. Meatloaf landjaeger ham
turducken jowl cupim hamburger corned beef leberkas andouille shoulder meatball.
`
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return <P>{text('children', paragraph)}</P>
}))
