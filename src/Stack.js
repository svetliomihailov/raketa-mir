import styled from 'styled-components'

export default styled.div`
  display: flex;
  justify-content: ${(props) => props.h};
  align-items: ${(props) => props.v};
`
