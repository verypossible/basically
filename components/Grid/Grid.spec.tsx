import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import Grid from './index'

describe('Grid', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Grid>Hi There</Grid>)
    expect(tree).toMatchSnapshot()
  })
})
