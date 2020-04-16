import React from 'react'
import styled from 'styled-components'
import buttonReset from './buttonReset'

const TabsWrapper = styled.div`
  display: flex;
  margin-bottom: 1em;
`

const Tab = styled.button`
  ${buttonReset};
  padding: 0.75em 1.5em;
  background-color: #efefef;
  border-bottom: 2px solid
    ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.gray};
  font-weight: 500;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export default ({ initial = 0, children }) => {
  const [current, setCurrent] = React.useState(initial)

  return (
    <React.Fragment>
      <TabsWrapper>
        {children.map((child, idx) => (
          <Tab
            key={idx}
            type='button'
            active={idx === current}
            onClick={() => setCurrent(idx)}
          >
            {child.props.title}
          </Tab>
        ))}
      </TabsWrapper>

      {children[current]}
    </React.Fragment>
  )
}
