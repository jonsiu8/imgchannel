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
        line-height: 1.2em;
    };

    p {
        color: #808080;
        font-size: .9em;
        font-family: Verdana, sans-serif;
    };

    margin: auto;
    width: 60%;
    border: none;
    padding: 25px;

    @media (max-width: 768px) {
        width: 90%;
        padding: 10px;
      }
` 
const BlogHtml = styled.div`
    margin: 0;
    font-family: Verdana, sans-serif;
    color: #000000;

    h1, h2, h3, h4, h5,h6 {
        color: #000000;
        margin: 0 0 .8em 0;
        line-height: 1.4em;
    }
 

    p, b, strong, i, em, mark, small, del, ins, sub, sup {
        color: #000000;
        font-size: 1em;
        font-family: Verdana, sans-serif;
        margin 0 0 1.1em 0;
        line-height: 1.6em;
    }

    li {
        margin: 0 0 .7em 0;
    }
`

const ContainerForm = styled.div`
    border-style: solid;
    border-width: 5px;
    border-radius: 20px;
    border-color: #3277B3;
    background-color:#3277B3;
    margin: 0 0 0 0;
    padding: 1em;
    h2 {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .2em 0;
    }
    p {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .8em 0;
    }
`

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
            frontmatter {
                title
                date(formatString: "MMM Do YYYY")
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
                <div className="grid-wrapper">
                    <div className="col-9">
                        <BlogContainer>
                            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                            <p className="icon fa-user-circle"> {props.data.markdownRemark.frontmatter.author} | <span className="icon fa-calendar"/> {props.data.markdownRemark.frontmatter.date}<br/>
                                <span className="icon fa-clock-o"/> {props.data.markdownRemark.timeToRead}<i>-min read</i>
                            </p>          
                            <BlogHtml dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></BlogHtml>

                            <ContainerForm>
                                <h2>Subscribe to our newsletters</h2>
                                <p>Receive new articles straight to your inbox.</p>
                                <form name="blog-subscribe" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/subscribed"> 
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="blog-subscribe" /> 
                                    <div className="field half first">
                                        <label htmlFor="name">Name
                                        <input type="text" name="name" id="name" required/>
                                        </label>                                            
                                    </div>
                                    <div className="field half">
                                        <label htmlFor="email">Email
                                        <input type="text" name="email" id="email" required/>
                                        </label>                                         
                                    </div>
                                    <ul className="actions">                                            
                                        <input type="submit" value="Subscribe" className="button" />                                                                      
                                    </ul>
                                </form>   
                            </ContainerForm>   

                        </BlogContainer>                                     
                    </div>
                </div>                       
            </PageContainer>   
        </Layout>
    )
}

export default Blog