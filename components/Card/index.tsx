import * as React from 'react'
import styled from 'styled-components'

interface ICard {
  className?: string
  children: JSX.Element[] | JSX.Element | string
}

const UnStyledCard = ({ children, ...props }: ICard) => {
  return <div {...props}>{children}</div>
}

const StyledCard = styled(UnStyledCard)`
  box-shadow: rgb(243, 243, 243) 0px 5px 10px;
  border: 1px solid rgb(229, 229, 229);
  background: #FFF;
  border-radius: 3px;
  padding: 10px;
`

export const Card = (props: ICard) => <StyledCard {...props} />

export default Card
