import * as React from 'react'
import styled from 'styled-components'

interface ITextInput {
  autoFocus?: boolean
  className?: string
  defaultValue?: string
  disabled?: boolean
  htmlFor?: string
  maxLength?: number
  name?: string
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseMove?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseOut?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseOver?: (event: React.MouseEvent<HTMLInputElement>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLInputElement>) => void
  onReset?: (event: React.FormEvent<HTMLInputElement>) => void
  pattern?: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
}

const UnStyledTextInput = ({ ...props }: ITextInput) => {
  return <input type='text' {...props}/>
}

const StyledTextInput = styled(UnStyledTextInput)`
  background-color: #FFF;
  width: 90%;
  height: 2rem;
  border: .09375rem solid #F2F2F2;
  border-radius: 2px;
  outline: none;
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  color: #222;
  font-size: 0.9rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus {
    border: .09375rem solid #CCC;
  }

  @media (min-width: 500px) {
    width: 95%;
  }

  @media (min-width: 800px) {
    max-width: 30rem;
  }
`

export const TextInput = (props: ITextInput) => <StyledTextInput {...props} />

export default TextInput
