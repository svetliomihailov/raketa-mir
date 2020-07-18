import styled from 'styled-components'
import reset from './reset'

export default styled.textarea`
  ${reset};
  border: 0;
  outline: 0;
  border-radius: 4px;
  border: 0;
  width: 100%;
  height: 100px;
  padding: 0.5em 0.75em;
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.trueWhite};

  &:hover {
    border-color: ${(props) => props.theme.colors.darkGray};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`
