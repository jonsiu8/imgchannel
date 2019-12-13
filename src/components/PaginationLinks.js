import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: #3277B3;
  display: inline;
  margin: .2em;
  padding 3px;
  text-decoration: none;
  :hover {
    box-shadow: 2px 2px 2px #1E1E1E;
    color: #3277B3;
    }
`
const PaginationLinks = ({ currentPage, numberOfPages }) => {
    const isFirst = currentPage === 1
    const isLast = currentPage === numberOfPages
    const previousPage = currentPage - 1 === 1 ? '/blog' : '/blog/page/' + (currentPage - 1).toString()
    const nextPage = '/blog/page/' + (currentPage + 1).toString()

    return (
      <div>
         <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {!isFirst && (
            <StyledLink to={previousPage} rel="prev">
              ← previous
            </StyledLink>
          )}

          {Array.from({ length: numberOfPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <StyledLink
                to={`blog/${i === 0 ? '' : 'page/' + (i + 1)}`}
                style={{
                  padding: 4,
                  textDecoration: 'none',
                  color: i + 1 === currentPage ? '#ffffff' : '',
                  background: i + 1 === currentPage ? '#3277B3' : '',
                }}
              >
                {i + 1}
              </StyledLink>
            </li>
          ))}
          
          {!isLast && (
            <StyledLink to={nextPage} rel="next">
              next page →
            </StyledLink>
          )}
        </ul>
      </div>
    )
}

export default PaginationLinks