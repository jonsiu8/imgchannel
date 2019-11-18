import React from 'react'
import Helmet from 'react-helmet'
import styled from "styled-components"
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import BannerBlog from '../components/BannerBlog'

const StyledImg = styled(Img)`
  display: block;
  margin: 0 ;
  padding 0;
  max-width: 200px;
`

const Header2 = styled.h2`
    display: block;
    margin: 0 ;
    padding 0;
    font-family: "Times New Roman", Times, serif;
    :hover {
        color: #07102B;
    }

`
const Author = styled.p`
    display: block;
    margin: 0 ;
    padding 0;
    color: #ececec;
    font-size: .8em;
    font-family: Verdana, sans-serif;
`

const Excerpt = styled.p`
    display: block;
    margin: 10px 0;
    padding 0;
    color: #ececec;
    font-size: .9em;
    font-family: Verdana, sans-serif;
`



const BlogTitles = styled.div`    
    background-color:white;  
    
    color: #666666;
    :hover { 
        background-color:#e6e6e6;
        h3{color:#3277B3};
    };   
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: .5rem 1rem;
    h2 {
        border-style: solid;
        border-color: red;
        color:#000000;
        font-family: "Times New Roman", Times, serif;
        margin: 0;
        padding: 0px;
    }

`
const BlogList = styled.li`
    list-style-type: none;
    margin: 0;
    text-decoration: none;

    h2 {
        border-style: solid;
        border-color: red;
        color:#000000;
        font-family: "Times New Roman", Times, serif;
        margin: 0;
        padding: 0px;
    }

    p {
         color: #070F2B
         margin: 0;
        padding: 0px;
    };
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
                                        {/* <span className="image left"><img src={edge.node.frontmatter.featuredImage.publicURL} alt="" /></span> */}
                                        <StyledImg sizes={edge.node.frontmatter.featuredImage.childImageSharp.sizes} />
                                        <Link to ={`/blog/${edge.node.fields.slug}`}> <Header2>{edge.node.frontmatter.title}</Header2></Link>                                             
                                        <Author className="icon fa-user">: {edge.node.frontmatter.author} | Last updated: {edge.node.frontmatter.date} </Author>
                                        <Excerpt dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
                                        <hr/>
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
