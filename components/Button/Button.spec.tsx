import * as React from 'react'

import { shallow } from 'enzyme'
import 'jest-styled-components'

import Button from './index'

describe('Button', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Button>Click Me</Button>)
    expect(tree).toMatchSnapshot()
  })

  it('can be clicked', () => {
    const onClick = jest.fn()
    const tree = shallow(<Button onClick={onClick}>Click Me</Button>)
    tree.find('button').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
  })
})
