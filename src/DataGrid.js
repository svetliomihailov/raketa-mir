import React from 'react'
import styled from 'styled-components'
import reset from './reset'

const Wrapper = styled.div`
  ${reset}

  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 1em;

    th,
    td {
      padding: 0.5em;
      text-align: left;
    }

    tr {
      border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};
      transition: all 0.3s ease-in-out;
    }

    a {
      color: ${(props) => props.theme.colors.primary};
    }

    tbody {
      tr {
        &:hover {
          border-color: ${(props) => props.theme.colors.gray};

          td {
            background-color: ${(props) => props.theme.colors.lighterGray};
          }
        }
      }
    }

    .actions {
      width: 50px;
      white-space: nowrap;

      div:first-of-type {
        display: flex;
        align-items: center;
      }

      a,
      button {
        margin-left: 0.5em;
      }
    }
  }
`

const DataGrid = ({ list, header, row }) => (
  <Wrapper>
    <table>
      <thead>
        <tr>{header()}</tr>
      </thead>

      <tbody>
        {list.map((item, idx) => (
          <tr key={item.id || idx}>{row(item)}</tr>
        ))}
      </tbody>
    </table>
  </Wrapper>
)

export default DataGrid
