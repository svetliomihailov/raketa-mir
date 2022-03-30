import React from 'react'
import styled from 'styled-components'
import reset from './reset'
import H from './H'

const Wrapper = styled.div`
  ${reset};

  margin: 1em 0;
`

const PageTitle = ({ children }) => (
  <Wrapper>
    <H
      as='h1'
      size='xlarge'
      style={{ fontFamily: 'sans-serif', fontWeight: 700 }}
    >
      {children}
    </H>
  </Wrapper>
)

export default PageTitle
