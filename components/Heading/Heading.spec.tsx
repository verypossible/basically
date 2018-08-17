import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import { H1 } from './index'

describe('Heading', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<H1>Hi There</H1>)
    expect(tree).toMatchSnapshot()
  })
})
