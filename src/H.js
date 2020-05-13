import styled from 'styled-components'
import reset from './reset'

export default styled.div`
  ${reset};
  margin: 0;
  padding: 0;
  font-size: ${(props) => props.theme.font[props.size]};
  padding-bottom: 0.5em;
`
