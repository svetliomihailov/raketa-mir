import styled from 'styled-components'
import reset from './reset'

const Navigation = styled.div`
  ${reset};

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  width: 64px;
  padding: 8px 0;
  background-color: ${(props) => props.theme.colors.black};
`

const NavItem = styled.div`
  ${reset};

  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.darkerGray : 'transparent'};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkerGray};
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
