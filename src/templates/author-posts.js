import React from "react"
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import styled from "styled-components"
import Img from 'gatsby-image'
import Helmet from 'react-helmet'

import previewpic from '../assets/images/ogimage-blogpage.png'

const PageContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
` 

const PageHeader = styled.h1`
  line-height: 1.2em;
  margin: 0;
  padding: 0;
`

const StyledImg = styled(Img)`
  display: block;
  margin: 0 0 0 0;
  padding 0;
  max-width: 100%;
  border-radius: 10px;
  :hover {
    opacity: 0.8;
    box-shadow: 5px 5px 5px #1E1E1E;
    }
`

const HeaderTitle = styled.h3`
    display: block;
    margin: .4em 0 0 0;
    padding 0;
    font-family: Georgia, serif;
    line-height: 1.3em;
    color: #1a1a1a;
    :hover {
        color: #3277B3;
    }
    // text-shadow: .5px 0px #070F29;
    @media (max-width: 768px) {
        font-size: 1.5em;
  }
`
const IconSpan = styled.span`
    margin: 0.2em 0 0 0;
    padding 0;
    color: #3277B3;
    font-size: 0.9em;
`

const Author = styled.p`
    display: block;
    margin: .2em 0 .3em 0;
    padding 0;
    color: #3277B3;
    font-size: .9em;
    font-family: Georgia, serif;
    line-height: 1.5em;
    @media (max-width: 768px) {
        font-size: 1em;
  }
`

const Excerpt = styled.p`
    display: block;
    margin: 0 0 .2em 0;
    padding 0;
    color: #4d4d4d;
    font-size: 1em;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4em;
    @media (max-width: 768px) {
      font-size: 1.1em;
}
`

const authorPosts = ({ data, pageContext }) => {
    // const { totalCount } = data.allMarkdownRemark
    //const author = authors.find(x => x.name === pageContext.authorName)
    // const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`

    return (
      <Layout>        
      <Helmet>
          <title>Author Posts</title>
          <meta name="description" content="Blog - IMG Channel" />
          <meta property="og:title" content="Blog"/>
          <meta property="og:description" content="If you think financial education is expensive try ingnorance."/>
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image" content={previewpic} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="blogger" />
      </Helmet>


      <PageContainer>
      <section id="banner" className="style3">
          <div className="inner">
              <header>
                  <PageHeader>Posts by {pageContext.authorName}</PageHeader>
              </header>
              {/* <div className="content">
                  <p>If you think financial education is expensive try ingnorance.</p>
              </div> */}
          </div>
      </section>

      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <div className="grid-wrapper">
                          {data.allMarkdownRemark.edges.map((edge) => {
                              return (                           
                                  <div className="col-4">                                                                       
                                      {/* <span className="image left"><img src={edge.node.frontmatter.featuredImage.publicURL} alt="" /></span> */}
                                      <Link to ={`/blog/${edge.node.fields.slug}`}>
                                          <StyledImg sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
                                          <HeaderTitle>{edge.node.frontmatter.title}</HeaderTitle>
                                      </Link>                                         
                                        <Author><IconSpan className="icon fa-user-circle"/> {edge.node.frontmatter.author} | {edge.node.timeToRead}<i> -min read</i> <br/>
                                                <IconSpan className="icon fa-calendar"/> {edge.node.frontmatter.date}
                                        </Author>
                                      <Excerpt dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                                      <hr/>

                                      {/* <Link to ={`/blog/${edge.node.fields.slug}`}> <HeaderTitle>{edge.node.frontmatter.title}</HeaderTitle></Link>                                         
                                      <Author><IconSpan className="icon fa-user-circle"/> {edge.node.frontmatter.author} | <IconSpan className="icon fa-calendar"/> {edge.node.frontmatter.date}<br/>
                                          <IconSpan className="icon fa-clock-o"/> {edge.node.timeToRead}<i>-min read</i>
                                      </Author>
                                      <Excerpt dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} /> */}
                                   
                                  </div>                 
                              )
                          })}
                  </div>
                  {/* <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
                  <ButtonContainer><Link to="/freebook" className="button next">Get your free ebook here</Link></ButtonContainer> */}
              </div>
          </section>
      </div>
      </PageContainer>
  </Layout>
   
    )
}

export const authorQuery = graphql`

  query($authorName: String!, $imageUrl: String!){  
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order:DESC}
            filter: { frontmatter: { author: { eq: $authorName }}}
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY") 
                        author
                        featuredImage {
                            childImageSharp {
                              sizes(maxWidth: 630) {
                                ...GatsbyImageSharpSizes
                              }
                            }
                            publicURL
                        }
                    }
                    fields {
                        slug
                    }
                    excerpt(pruneLength: 130)
                    timeToRead
                }
            }
            totalCount
        }
        file(relativePath: { eq: $imageUrl}){
          childImageSharp{
              fluid(maxWidth: 300){
                ...GatsbyImageSharpFluid
              }
          }
        }
      }
`

export default authorPosts