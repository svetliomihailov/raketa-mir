import { css } from 'styled-components';
import theme from './theme';

const reset = css`
  box-sizing: border-box;
  color: ${theme.colors.black};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: ${theme.font.base};
  line-height: ${theme.font.line};
`;

export default reset;
