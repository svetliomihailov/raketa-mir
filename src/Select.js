import styled from 'styled-components';
import reset from './reset';

export default styled.select`
  ${reset};
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 0;
  outline: 0;
  border-radius: 0;
  border: 0;
  width: 100%;
  padding: 0.75em;
  border-bottom: 2px solid ${props => props.theme.colors.black};
  background-repeat: no-repeat;
  background-position: center right 0.25em;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);
  background-color: ${props => props.theme.colors.lighterGray};
`;
