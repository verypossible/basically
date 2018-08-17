import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import TextInput from './index'

describe('TextInput', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<TextInput placeholder='Hi There' />)
    expect(tree).toMatchSnapshot()
  })
})
