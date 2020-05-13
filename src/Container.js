import styled from 'styled-components'
import reset from './reset'

export default styled.div`
  ${reset};
  padding-top: ${(props) => props.top && '1em'};
  padding-bottom: ${(props) => props.bottom && '1em'};
`
