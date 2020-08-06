import styled from 'styled-components'
import reset from './reset'

export default styled.input`
  ${reset};
  border: 0 !important;
  outline: 0 !important;
  border-radius: 4px !important;
  border: 0 !important;
  width: 100% !important;
  padding: 0.5em 0.75em !important;
  border: 1px solid ${(props) => props.theme.colors.gray} !important;
  background-color: ${(props) => props.theme.colors.trueWhite} !important;

  &:hover {
    border-color: ${(props) => props.theme.colors.darkGray} !important;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary} !important;
  }
`
