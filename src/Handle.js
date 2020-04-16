import styled from 'styled-components';

export default styled.div`
  width: 2em;
  height: 2em;
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1vcmUtdmVydGljYWwiPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEiPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjEyIiBjeT0iNSIgcj0iMSI+PC9jaXJjbGU+PGNpcmNsZSBjeD0iMTIiIGN5PSIxOSIgcj0iMSI+PC9jaXJjbGU+PC9zdmc+);
  cursor: grabbing;
  filter: invert(${props => props.active ? 1 : 0});
`;
