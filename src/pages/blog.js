import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import previewpic from '../assets/images/ogimage-blogpage.png'

const StyledImg = styled(Img)`
  display: block;
  margin: .9em 0 0 0;
  padding 0;
  max-width: 160px;
  border-radius: 10px;
`

const HeaderTitle = styled.h3`
    display: block;
    margin: 0 ;
    padding 0;
    font-family: Verdana, sans-serif;
    line-height: 1.3em;
    :hover {
        color: #07102B;
    }
    text-shadow: 1px 0px #070F29;
    @media (max-width: 768px) {
        font-size: 1.4em;
  }
`
const IconSpan = styled.span`
    margin: 0.2em 0 0 0;
    padding 0;
    color: #ffffff;
    font-size: 1.1em;
    font-family: Verdana, sans-serif;
    text-shadow: 1px 0px #070F29;
`

const Author = styled.p`
    display: block;
    margin: 0.2em 0 0 0;
    padding 0;
    color: #ececec;
    font-size: .9em;
    font-family: Verdana, sans-serif;
    text-shadow: .8px 0px #070F29;
`

const Excerpt = styled.p`
    display: block;
    margin: 10px 0;
    padding 0;
    color: #ececec;
    font-size: .9em;
    font-family: Verdana, sans-serif;
    line-height: 1.4em;
`

const HrBlog = styled.hr`
    border: 1px dotted white;
    border-radius: 1px;
`

const BlogPage = (props) => (
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
                            {props.data.allMarkdownRemark.edges.map((edge) => {
                                return (                           
                                    <div className="col-4">                                                                       
                                        {/* <span className="image left"><img src={edge.node.frontmatter.featuredImage.publicURL} alt="" /></span> */}
                                        <Link to ={`/blog/${edge.node.fields.slug}`}> <HeaderTitle>{edge.node.frontmatter.title}</HeaderTitle></Link>
                                        <StyledImg sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />                                            
                                        <Author><IconSpan className="icon fa-user-circle"/> {edge.node.frontmatter.author} | <IconSpan className="icon fa-calendar"/> {edge.node.frontmatter.date} </Author>
                                        <Excerpt dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                                        <HrBlog/>
                                    </div>                 
                                )
                            })}
                    </div>
                </div>
            </section>
        </div>

       
    </Layout>
)

export default BlogPage

export const query = graphql`
    query  {
        allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    frontmatter {
                        title
                        date
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
                    excerpt
                    timeToRead
                }
            }
        }
    }
    `
