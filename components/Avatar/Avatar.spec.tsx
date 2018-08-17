import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import Avatar from './index'

describe('Avatar', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Avatar />)
    expect(tree).toMatchSnapshot()
  })
})
