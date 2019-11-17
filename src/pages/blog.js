import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

import { graphql, Link } from 'gatsby'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Blog Page</title>
            <meta name="description" content="Blog - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Blog Page</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <ol>
                        {props.data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li>
                                    <Link to ={`/blog/${edge.node.fields.slug}`}>
                                    <h3>{edge.node.frontmatter.title}</h3>
                                    <p>{edge.node.frontmatter.date} - by:{edge.node.frontmatter.author}</p>
                                    </Link>
                                </li>
                            )
                        })}                
                    </ol>
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