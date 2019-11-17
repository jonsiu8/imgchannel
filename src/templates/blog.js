import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'

const PageContainer = styled.body`
    background-color: #ffffff;
    height: 100%;
` 
const BlogContainer = styled.div`
    h1 {
        color: #000000;
    };

    p {
        color: #000000;
    };

    margin: auto;
    width: 50%;
    border: none;
    padding: 10px;

    @media (max-width: 768px) {
        width: 95%;
      }
` 
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
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
                }
            }
            html
        }
    }
`

const Blog = (props) => {
    
    return (
        <Layout>
            <PageContainer>
                <div className="grid-wrapper">
                    <div className="col-12">
                        <BlogContainer>
                            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                            <p>{props.data.markdownRemark.frontmatter.date}<br/>
                            by: {props.data.markdownRemark.frontmatter.author}</p>            
                            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
                        </BlogContainer>
                    </div> 
                </div>            
            </PageContainer>
        </Layout>
        
    )
    
}

export default Blog