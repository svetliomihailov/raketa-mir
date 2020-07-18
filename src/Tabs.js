import React from 'react'
import styled from 'styled-components'
import reset from './reset'
import buttonReset from './buttonReset'

const TabsWrapper = styled.div`
  ${reset};
  display: inline-flex;
  margin-bottom: 1em;
  border-bottom: 3px solid ${(props) => props.theme.colors.lightGray};
`

const Tab = styled.button`
  ${buttonReset};
  position: relative;
  top: 3px;
  margin-right: 2em;
  padding: 0 0 0.5em 0;
  border-bottom: 3px solid
    ${(props) => (props.active ? props.theme.colors.black : 'transparent')};
  color: ${(props) =>
    props.active ? props.theme.colors.black : props.theme.colors.darkGray};
  font-weight: 500;

  &:hover {
    border-color: ${(props) => props.theme.colors.black};
  }

  &:last-of-type {
    margin-right: 4em;
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
