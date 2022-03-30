import styled from 'styled-components'
import reset from './reset'

const Navigation = styled.div`
  ${reset};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 64px;
  background-color: ${(props) => props.theme.colors.black};
`

const NavItem = styled.div`
  ${reset};

  width: 64px;
  height: 64px;
  border-bottom: 1px solid #333;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`

export { Navigation, NavItem }
