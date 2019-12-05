import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import previewpic from '../assets/images/ogimage-blogpage.png'

const PageContainer = styled.body`
    background-color: #ffffff;
    height: 100%;
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
    font-family: Verdana, sans-serif;
    line-height: 1.3em;
    color: #333333;
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
    font-size: .8em;
    font-family: Arial, Helvetica, sans-serif;
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
`

// const HrBlog = styled.hr`
//     border: 1px dotted white;
//     border-radius: 1px;
// `

const BlogPage2 = (props) => {
    return (
    <Layout>        
        <Helmet>
            <title>Blog Page</title>
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
                <header className="major">
                    <h1>Blog</h1>
                </header>
                <div className="content">
                    <p>If you think financial education is expensive try ingnorance.</p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <div className="grid-wrapper">
                  <div className="col-1"/>
                  <div className="col-6">
                    {props.data.allMarkdownRemark.edges.map((edge) => {
                      return (                           
                        <div>                                                         
                          <Link to ={`/blog/${edge.node.fields.slug}`}>
                              <StyledImg sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
                              <HeaderTitle>{edge.node.frontmatter.title}</HeaderTitle>
                          </Link>                                         
                          <Author><IconSpan className="icon fa-user-circle"/> {edge.node.frontmatter.author} | {edge.node.frontmatter.date} | 
                                  {" "} {edge.node.timeToRead}<i>-min read</i>
                          </Author>
                          <Excerpt dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                          <hr/>                                     
                        </div>                 
                      )
                    })}
                  </div>
                  <div className="col-4">
                    <Sidebar/>           
                  </div>
                  <div className="col-1"/>
              </div>
            </div>
          </section>
        </div>
        </PageContainer>
    </Layout>
    )
}

export default BlogPage2

export const query = graphql`
    query  {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DDMMMYYYY") 
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
        }
    }
    `
