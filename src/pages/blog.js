import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import previewpic from '../assets/images/ogimage-blogpage.png'

const PageContainer = styled.body`
    background-color: #ffffff;
    height: 100%;
` 

const ButtonContainer = styled.div`
    .button{
    background-color:#3277B3;
    color:white;     
}
`

const StyledImg = styled(Img)`
  display: block;
  margin: 0 0 0 0;
  padding 0;
  max-width: 100%;
  border-radius: 10px;
`

const HeaderTitle = styled.h3`
    display: block;
    margin: .4em 0 0 0;
    padding 0;
    font-family: Verdana, sans-serif;
    line-height: 1.3em;
    color: #333333;
    :hover {
        color: #07102B;
    }
    // text-shadow: .5px 0px #070F29;
    @media (max-width: 768px) {
        font-size: 1.5em;
  }
`
const IconSpan = styled.span`
    margin: 0.2em 0 0 0;
    padding 0;
    color: #0B258F;
    font-size: 0.9em;
    font-family: Verdana, sans-serif;
`

const Author = styled.p`
    display: block;
    margin: .2em 0 .3em 0;
    padding 0;
    color: #0B258F;
    font-size: .8em;
    font-family: Verdana, sans-serif;
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
    font-family: Verdana, sans-serif;
    line-height: 1.4em;
`

// const HrBlog = styled.hr`
//     border: 1px dotted white;
//     border-radius: 1px;
// `

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
                            {props.data.allMarkdownRemark.edges.map((edge) => {
                                return (                           
                                    <div className="col-4">                                                                       
                                        {/* <span className="image left"><img src={edge.node.frontmatter.featuredImage.publicURL} alt="" /></span> */}
                                        <Link to ={`/blog/${edge.node.fields.slug}`}>
                                            <StyledImg sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
                                            <HeaderTitle>{edge.node.frontmatter.title}</HeaderTitle>
                                        </Link>                                         
                                        <Author><IconSpan className="icon fa-user-circle"/> {edge.node.frontmatter.author} | {edge.node.frontmatter.date} | 
                                              {" "} {edge.node.timeToRead}<i>-min read</i>
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
                    <ButtonContainer><Link to="/freebook" className="button next">Get your free ebook here</Link></ButtonContainer>
                </div>
            </section>
        </div>
        </PageContainer>
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
