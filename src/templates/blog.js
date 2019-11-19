import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const PageContainer = styled.body`
    background-color: #ffffff;
    height: 100%;
` 
const BlogContainer = styled.div`
    h2 {
        color: #000000;
        margin: 0;
        padding: 0px;
        font-family: Verdana, sans-serif;
        line-height: 1.3em;
    };

    p {
        color: #808080;
        font-size: .9em;
        font-family: Verdana, sans-serif;
    };

    margin: auto;
    width: 60%;
    border: none;
    padding: 10px;

    @media (max-width: 768px) {
        width: 90%;
      }
` 

const BlogHtml = styled.div`
    margin: 0;
    font-family: Verdana, sans-serif;
    color: #000000;

    h1{color: #000000; margin:0 0 0 0}
    h2{color: #000000; margin:0 0 0 0}
    h3{color: #000000; margin:0 0 0 0}
    h4{color: #000000; margin:0 0 0 0}
    h5{color: #000000; margin:0 0 0 0}
    h6{color: #000000; margin:0 0 0 0}

    p, i, b, strong {
        color: #000000;
        font-size: 1em;
        font-family: Verdana, sans-serif;
        margin 0 0 1.1em 0;
        line-height: 1.6em;
    }

    li {
        margin: 0 0 .9em 0;
    }
`
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
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
            html
        }
    }
`

const Blog = (props) => {
    
    return (
        <Layout>
            <Helmet>
            <title>{props.data.markdownRemark.frontmatter.title}</title>
            
            <meta property="og:title" content={props.data.markdownRemark.frontmatter.title}/>
            <meta property="og:description" content={props.data.markdownRemark.excerpt}/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={props.data.markdownRemark.frontmatter.featuredImage.publicURL} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="image" />
        </Helmet>
            <PageContainer>
                <div className="blog-wrapper">
                    <div className="col-9">
                        <BlogContainer>
                            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                            <p className="icon fa-user-circle"> {props.data.markdownRemark.frontmatter.author} | <span className="icon fa-calendar"/> {props.data.markdownRemark.frontmatter.date}</p>          
                            <BlogHtml dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></BlogHtml>
                        </BlogContainer>
                    </div> 
                </div>            
            </PageContainer>
        </Layout>
        
    )
    
}

export default Blog