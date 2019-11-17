import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

const BlogTitleContainer = styled.ol`  
    
    list-style-type: none;
    margin: 0;
    `
const BlogList = styled.li`
    margin: 1rem o;
    a{
        background: #f4f4f4;
        color: #000000;
        h3{color: #000000;};
        display: block;
        padding: 1rem;
        text-decoration: none;
    }

    a:hover{
        background: #e4e4e4;
    }

    h3 {
        margin-bottom: 0;
    }

    p {
        color: #777777;
        font-size: 1rem;
        font-style: italic;
    }
`



const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Blog Page</title>
            <meta name="description" content="Blog - IMG Channel" />
        </Helmet>
        <BannerBlog/>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <BlogTitleContainer>
                        {props.data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <BlogList>
                                    <Link to ={`/blog/${edge.node.fields.slug}`}>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <p>{edge.node.frontmatter.date} - by:{edge.node.frontmatter.author}</p>
                                    </Link>
                                </BlogList>
                            )
                        })}                
                    </BlogTitleContainer>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic

export const query = graphql`
    query  {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        author
                        date
                        path
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `