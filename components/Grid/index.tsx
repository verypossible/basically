import * as React from 'react'
import styled from 'styled-components'

interface IGrid {
  className?: string
  children: JSX.Element[] | JSX.Element | string
}

const UnStyledGrid = ({ children, ...props }: IGrid) => {
  return <div {...props}>{children}</div>
}

const StyledGrid = styled(UnStyledGrid)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem 1rem;
`

export const Grid = (props: IGrid) => <StyledGrid {...props} />

export default Grid
