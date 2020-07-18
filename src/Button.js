import styled from 'styled-components'
import buttonReset from './buttonReset'
import theme from './theme'

const variants = {
  primary: {
    border: 'primary',
    background: 'primary',
    color: 'white',
    hoverBorder: 'primaryDark',
    hoverBackground: 'primaryDark',
    hoverColor: 'white',
    activeBorder: 'primaryDarker',
    activeBackground: 'primaryDarker',
    activeColor: 'white',
  },
  secondary: {
    border: 'darkerGray',
    background: 'white',
    color: 'darkerGray',
    hoverBorder: 'darkGray',
    hoverBackground: 'darkGray',
    hoverColor: 'white',
    activeBorder: 'darkerGray',
    activeBackground: 'darkerGray',
    activeColor: 'white',
  },
  success: {
    border: 'success',
    background: 'success',
    color: 'white',
    hoverBorder: 'successDark',
    hoverBackground: 'successDark',
    hoverColor: 'white',
    activeBorder: 'successDarker',
    activeBackground: 'successDarker',
    activeColor: 'white',
  },
  danger: {
    border: 'danger',
    background: 'danger',
    color: 'white',
    hoverBorder: 'dangerDark',
    hoverBackground: 'dangerDark',
    hoverColor: 'white',
    activeBorder: 'dangerDarker',
    activeBackground: 'dangerDarker',
    activeColor: 'white',
  },
}

const sizes = {
  sm: theme.font.small,
  md: theme.font.base,
  lg: theme.font.medium,
}

const getColor = (props, variant, key) =>
  props.theme.colors[variants[variant][key]]

const Button = styled.button`
  ${buttonReset};
  padding: 0.5em 1em;
  margin-right: 0.25em;
  border: 2px solid ${(props) => getColor(props, props.variant, 'border')};
  border-radius: 48px;
  background-color: ${(props) => getColor(props, props.variant, 'background')};
  color: ${(props) => getColor(props, props.variant, 'color')};
  font-size: ${(props) => sizes[props.size || 'md']};
  font-weight: 700;
  line-height: 1;
  transition: 0.1s ease-in-out all;

  &:focus {
    border-color: ${(props) => getColor(props, props.variant, 'activeBorder')};
  }

  &:hover {
    border-color: ${(props) => getColor(props, props.variant, 'hoverBorder')};
    background-color: ${(props) =>
      getColor(props, props.variant, 'hoverBackground')};
    color: ${(props) => getColor(props, props.variant, 'hoverColor')};
  }

  &:active {
    border-color: ${(props) => getColor(props, props.variant, 'activeBorder')};
    background-color: ${(props) =>
      getColor(props, props.variant, 'activeBackground')};
    color: ${(props) => getColor(props, props.variant, 'activeColor')};
  }

  &:last-of-type {
    margin-right: 0;
  }
`

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

export default Button
