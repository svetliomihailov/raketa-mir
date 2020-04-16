import styled from 'styled-components';
import buttonReset from './buttonReset';
import theme from './theme';

const variants = {
  primary: {
    border: 'primary',
    background: 'primary',
    color: 'white',
  },
  secondary: {
    border: 'gray',
    background: 'white',
    color: 'black',
  },
  success: {
    border: 'success',
    background: 'success',
    color: 'white',
  },
  danger: {
    border: 'danger',
    background: 'danger',
    color: 'white',
  },
};

const sizes = {
  sm: theme.font.small,
  md: theme.font.base,
  lg: theme.font.medium,
};

const getColor = (props, variant, key) => props.theme.colors[variants[variant][key]];

const Button = styled.button`
  ${buttonReset};
  padding: 0.75em 1.25em;
  margin-right: 0.25em;
  border: 1px solid ${props => getColor(props, props.variant, 'border')};
  border-radius: 3px;
  background-color: ${props => getColor(props, props.variant, 'background')};
  color:  ${props => getColor(props, props.variant, 'color')};
  font-size: ${props => sizes[props.size || 'md']};
  font-weight: 600;
  line-height: 1;
  transition: 0.1s ease-in-out all;

  &:hover {
    /* transform: scale(1.01); */
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  &:active { transform: scale(0.95); }

  /* &:focus { box-shadow: 0 0 20px ${props => props.theme.colors.primary}; } */

  &:last-of-type { margin-right: 0; }
`;

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
