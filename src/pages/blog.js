import React from 'react'
import { Link, graphql , useStaticQuery } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
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
    `)

    return (
        <div>
            <h1>Blog Page</h1>
            <h2>Post will be here</h2>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <Link to ={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                            </Link>
                        </li>
                    )
                })}                
            </ol>
        </div>
    )
}

export default BlogPage