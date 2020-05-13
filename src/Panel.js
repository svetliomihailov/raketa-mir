import styled from 'styled-components'
import reset from './reset'

const Panel = styled.div`
  ${reset};
  margin-bottom: 0.5em;
  border: 1px solid #ddd;
  border-radius: 3px;
  background-color: #fff;

  &.sortable-selected {
    background-color: #0a0a;
  }
`

const PanelTitle = styled.div`
  ${reset};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25em 0.25em 0.25em;
  border-bottom: 1px solid #ddd;
  background-color: ${(props) => props.theme.colors.lighterGray};
  font-weight: 700;
`

const PanelContent = styled.div`
  padding: 1em;
`

export { Panel, PanelTitle, PanelContent }
