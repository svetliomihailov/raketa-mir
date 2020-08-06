import { css } from 'styled-components'
import theme from './theme'

const reset = css`
  box-sizing: border-box !important;
  color: ${theme.colors.black} !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  font-size: ${theme.font.base} !important;
  line-height: ${theme.font.line} !important;
`

export default reset
