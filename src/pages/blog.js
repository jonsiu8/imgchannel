import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'


const BlogTitles = styled.div`
    background-color:white;  
    h3{color:#3277B3};
    color: black;
    :hover { 
        background-color:#e6e6e6;
        h3{color:#000000};
    };   
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 1rem;
    margin: 1rem;
`
const BlogList = styled.li`
    list-style-type: none;
    margin: 0;
    text-decoration: none;
    p { color: #070F2B}
`

const BlogPage = (props) => (
    <Layout>        
        <Helmet>
            <title>Blog Page</title>
            <meta name="description" content="Blog - IMG Channel" />
        </Helmet>

        <BannerBlog/>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                            {props.data.allMarkdownRemark.edges.map((edge) => {
                                return (                           
                                    <div className="col-4">
                                        <Link to ={`/blog/${edge.node.fields.slug}`}>
                                            <BlogTitles>
                                                <BlogList>
                                                    <h3>{edge.node.frontmatter.title}</h3>
                                                    <Img sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
                                                    <p>{edge.node.frontmatter.date} - by:{edge.node.frontmatter.author}</p>
                                                    {/* <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} /> */}
                                                </BlogList>
                                            </BlogTitles>
                                        </Link>
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
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `
