import styled from 'styled-components'
import reset from './reset'

export default styled.div`
  ${reset};
  width: 100%;
  padding: 0 calc(1em / 2);

  padding-top: ${(props) => props.top && '1em'};
  padding-bottom: ${(props) => props.bottom && '1em'};

  @media (min-width: 1184px) {
    width: 98%;
    margin: 0 auto;
  }
`
