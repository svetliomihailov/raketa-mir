import styled from 'styled-components'
import reset from './reset'

export default styled.textarea`
  ${reset};
  border: 0;
  outline: 0;
  border-radius: 0;
  border: 0;
  width: 100%;
  height: 100px;
  padding: 0.75em;
  border-bottom: 2px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.lighterGray};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`
