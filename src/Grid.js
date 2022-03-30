import styled from 'styled-components'
import reset from './reset'

const Row = styled.div`
  ${reset};

  @media (min-width: 1184px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: ${(props) => props.gutter || '1em'};
    grid-row-gap: ${(props) => props.gutter || '1em'};
    margin: 0;
  }
`

const Col = styled.div`
  ${reset};

  grid-column: span ${(props) => props.s || 12};
`

const getShift = (s) => {
  const SHIFTS = {
    1: '2 / span 10',
    2: '3 / span 8',
    3: '4 / span 6',
  }

  return SHIFTS[s]
}

const Shift = styled.div`
  ${reset};

  grid-column: ${(props) => getShift(props.s)};
`

export { Shift, Row, Col }
