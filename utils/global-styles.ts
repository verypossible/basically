import { injectGlobal } from 'styled-components'

const typography = `
  html {
    font-family: sans-serif;
  }
`

const globals = () => injectGlobal`
  ${typography}
`

export default globals
