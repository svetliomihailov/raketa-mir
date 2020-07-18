import styled from 'styled-components'
import reset from './reset'

export default styled.label`
  ${reset};
  display: block;
  margin-bottom: 0.25em;
  color: ${(props) => props.theme.colors.darkerGray};
  font-size: ${(props) => props.theme.font.small};
  font-weight: 600;
  cursor: pointer;
`
