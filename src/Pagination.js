import React from 'react'
import styled from 'styled-components'
import reset from './reset'

const Wrapper = styled.div`
  ${reset}

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 1em 0 1em 0;

  a,
  span {
    margin: 0 0.25em 0 0.25em;
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
