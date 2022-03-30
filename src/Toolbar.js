import styled from 'styled-components'
import reset from './reset'

export default styled.div`
  ${reset};

  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: ${(props) => props.mb || 0};
`
