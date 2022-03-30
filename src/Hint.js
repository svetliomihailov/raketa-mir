import styled from 'styled-components'
import reset from './reset'

const Hint = styled.div`
  ${reset};

  font-size: ${(props) => props.theme.font.small};
  opacity: 0.7;
  color: ${(props) => props.type === 'error' && props.theme.colors.danger};
`

export default Hint
