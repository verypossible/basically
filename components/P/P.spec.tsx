import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import P from './index'

describe('P', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<P>Hi There</P>)
    expect(tree).toMatchSnapshot()
  })
})
