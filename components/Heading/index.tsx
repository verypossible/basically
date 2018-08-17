import styled from 'styled-components'

const commonStyles = `
  color: #222;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    font-weight: inherit;
  }
`

export const H1 = styled.h1`
  ${commonStyles}
  font-size: 1.5rem;
  margin: 0.5rem 0;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`

export const H2 = styled.h2`
  ${commonStyles}
  font-size: 1.25rem;
  margin: 0.3rem 0;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`

export const H3 = styled.h3`
  ${commonStyles}
  font-size: 1rem;
  margin: 0.2rem 0;

  @media (min-width: 600px) {
    font-size: 1.25rem;
  }
`

export const H4 = styled.h4`
  ${commonStyles}
  font-size: 1rem;
  margin: 0.2rem 0;
`

export const H5 = styled.h5`
  ${commonStyles}
`

export const H6 = styled.h6`
  ${commonStyles}
`
