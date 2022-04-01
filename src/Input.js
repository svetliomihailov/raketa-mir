import styled from 'styled-components'
import reset from './reset'

export default styled.input`
  ${reset};
  border: 0;
  outline: 0;
  border-radius: 4px;
  border: 0;
  width: 100%;
  padding: 0.5em 0.75em;
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.trueWhite};
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${(props) => props.theme.colors.darkGray};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`
