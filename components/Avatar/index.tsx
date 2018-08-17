import * as React from 'react'
import styled from 'styled-components'

interface IAvatar {
  className?: string
  round?: boolean
  src?: string
}

const placeholder = 'https://placeimg.com/640/480/animals'

const UnStyledAvatar = ({ src, ...props }: IAvatar) => {
  return <div {...props} />
}

const roundStyles = `
  border-radius: 50%;
`

const StyledAvatar = styled(UnStyledAvatar)`
  width: 5rem;
  height: 5rem;
  background-image: url('${props => props.src && props.src || placeholder}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.round && roundStyles}
`

export const Avatar = (props: IAvatar) => <StyledAvatar {...props} />

export default Avatar
