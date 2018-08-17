const fs = require('fs')
const chalk = require('chalk')

const newComponent = process.argv[2]
const path = `./components/${newComponent}`

//------------------------------------------------
//  Begin: Generated File Contents
//------------------------------------------------
const indexContents =
`import * as React from 'react'
import styled from 'styled-components'

interface I${newComponent} {
  className?: string
  children: JSX.Element[] | JSX.Element | string
}

const UnStyled${newComponent} = ({ children, ...props }: I${newComponent}) => {
  return <div {...props}>{children}</div>
}

const Styled${newComponent} = styled(UnStyled${newComponent})\`
  background: none;
\`

export const ${newComponent} = (props: I${newComponent}) => <Styled${newComponent} {...props />

export default ${newComponent}
`

const storiesContents =
`import * as React from 'react'

import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import info from '../../utils/storybook-info'
import ${newComponent} from './index'

const withInfo = info(\`
### Notes

The notes need to be updated for the new component.

### Customization

\\\`\\\`\\\`
import { ${newComponent} } from 'basically'
import styled from 'styled-components'

const My${newComponent} = styled(${newComponent})\\\`
  background: blue;
  color: white;
\\\`;

<My${newComponent}>I'm Customized</My${newComponent}>
\\\`\\\`\\\`
\`)

const stories = storiesOf('Components/${newComponent}', module)
stories.addDecorator(withKnobs)

stories.add('Documentation', withInfo(() => {
  return <${newComponent}>{text('children', 'Hello')}</${newComponent}>
}))
`

const specContents =
`import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import ${newComponent} from './index'

describe('${newComponent}', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<${newComponent}>Hi There</${newComponent}>)
    expect(tree).toMatchSnapshot()
  })
})
`
//------------------------------------------------
//  End: Generated File Contents
//------------------------------------------------

console.log(chalk.magenta(`New Component: ${newComponent}\n`))

console.log('Making Directory')
fs.mkdirSync(path)

console.log(chalk.green('====='))
console.log('Writing Component')
fs.writeFile(
  `${path}/index.tsx`,
  indexContents,
  (err) => { if(err) console.error(err) }
)

console.log('Writing Storybook Stories')
fs.writeFile(
  `${path}/${newComponent}.stories.tsx`,
  storiesContents,
  (err) => { if(err) console.error(err) }
)

console.log('Writing Specs')
fs.writeFile(
  `${path}/${newComponent}.spec.tsx`,
  specContents,
  (err) => { if(err) console.error(err) }
)

console.log(chalk.green('====='))
console.log(chalk.magenta(`${newComponent} generated\n`))
console.warn(chalk.red('Do not forget to update index.ts to export your new component.'))
console.log(chalk.yellow('Add the following to the imports section of index.ts\n'))
console.log(`  import ${newComponent} from './components/${newComponent}'\n`)
console.log(chalk.yellow(`Then include ${newComponent} in the export declaration`))
console.log('\n\n')
