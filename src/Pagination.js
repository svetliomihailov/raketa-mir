import React from 'react'
import styled from 'styled-components'
import reset from './reset'

const Wrapper = styled.div`
  ${reset}

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.25em;
  padding: 1em 0 1em 0;

  a,
  span {
    display: block;
    min-width: 1.25em;
    padding: 0.5em 0.75em;
    font-weight: 500;
    text-align: center;
  }

  a {
    color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.lightGray};
    border-radius: 4px;
    transition: all 0.2s ease-in-out;

    &:hover {
      border-color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
    }
  }
`

const Prev = ({ LinkComponent, router, currentPage }) => {
  if (currentPage === 1) {
    return <span>Previous</span>
  }

  return (
    <LinkComponent
      href={{
        pathname: router.pathname,
        query: { ...router.query, ...{ page: currentPage - 1 } },
      }}
    >
      <a>Previous</a>
    </LinkComponent>
  )
}

const Next = ({ currentPage, pagesCount, LinkComponent, router }) => {
  if (currentPage === pagesCount) {
    return <span>Next</span>
  }

  return (
    <LinkComponent
      href={{
        pathname: router.pathname,
        query: { ...router.query, ...{ page: currentPage + 1 } },
      }}
    >
      <a>Next</a>
    </LinkComponent>
  )
}

const Pagination = ({ pagination, LinkComponent, router }) => {
  const { currentPage, pagesCount } = pagination
  const pages = Array(pagesCount).fill(1)

  if (pagesCount <= 1 || router === null) {
    return ''
  }

  return (
    <Wrapper>
      <Prev
        LinkComponent={LinkComponent}
        router={router}
        currentPage={currentPage}
      />

      {pages.map((_, idx) => {
        const pageNum = idx + 1

        if (pageNum === currentPage) {
          return <span key={pageNum}>{pageNum}</span>
        } else {
          return (
            <LinkComponent
              key={pageNum}
              href={{
                pathname: router.pathname,
                query: { ...router.query, ...{ page: pageNum } },
              }}
            >
              <a>{pageNum}</a>
            </LinkComponent>
          )
        }
      })}

      <Next
        LinkComponent={LinkComponent}
        router={router}
        currentPage={currentPage}
        pagesCount={pagesCount}
      />
    </Wrapper>
  )
}

export default Pagination
