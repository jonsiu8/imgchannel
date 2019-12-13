import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

// import fbmessenger from '../assets/images/messageus.png'

const PageContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
` 
const BlogContainer = styled.div`
    h2 {
        color: #1a1a1a;
        margin: 0;
        padding: 0px;
        font-family: Georgia, serif;
        line-height: 1.2em;
    }

    p {
        color: #3277B3;
        font-size: .9em;
        font-family: Georgia, serif;
    }

    margin: 0;
    width: 100%;
    border: none;
    padding: 0;

    @media (max-width: 768px) {
        width: 100%;
        padding: 0px;
        h2 { font-size: 1.8em;}
      }
` 
const BlogHtml = styled.div`
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #1a1a1a;

    h1, h2, h3, h4, h5,h6 {
        color: #1a1a1a;
        margin: 0 0 0.4em 0;
        line-height: 1.3em;
    } 

    p, b, strong, i, mark, small, del, ins, sub, sup {
        color: #1a1a1a;
        font-size: 1.07em;
        font-family: Arial, Helvetica, sans-serif;
        margin 0 0 .75em 0;
        line-height: 1.5em;
    }

    em {
      color: #1a1a1a;
      font-size: .95em;
      font-family: Arial, Helvetica, sans-serif;
      margin 0 0 .75em 0;
      line-height: 1.5em;
    }



    li {
        margin: 0 0 .6em 0;
    }    

    @media (max-width: 768px) {
      p, b, strong, i, em, mark, small, del, ins, sub, sup {
        color: #1a1a1a;
        font-size: 1.125em;
        font-family: Arial, Helvetica, sans-serif;
        margin 0 0 .75em 0;
        line-height: 1.5em;
      }

      em {
        color: #1a1a1a;
        font-size: .98em;
        font-family: Arial, Helvetica, sans-serif;
        margin 0 0 .75em 0;
        line-height: 1.5em;
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
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image" content={props.data.markdownRemark.frontmatter.featuredImage.publicURL} />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="480" />
            <meta property="og:image:alt" content="image" />
            </Helmet>
            <PageContainer>
            <div id="main" className="alt">
                <div className="inner">
                <div className="grid-wrapper">
                  <div className="col-1"/>
                    <div className="col-6">
                        <BlogContainer>
                            {/* <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                            <p className="icon fa-user-circle"> {props.data.markdownRemark.frontmatter.author} | <span className="icon fa-calendar"/> {props.data.markdownRemark.frontmatter.date} | 
                                 {" "}<span className="icon fa-clock-o"/> {props.data.markdownRemark.timeToRead}<i>-min read</i>
                            </p>         */}

                            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
                            <p className="icon fa-user-circle"> {props.data.markdownRemark.frontmatter.author} | {props.data.markdownRemark.frontmatter.date} | {props.data.markdownRemark.timeToRead}<i>-min read</i>
                            </p>          
                            <BlogHtml dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></BlogHtml>
                        </BlogContainer>                                     
                    </div>
                    <div className="col-3">
                      <Sidebar/>
                      {/* messenger button */}
                      {/* <AStyled href="https://m.me/imgch/" target="_blank" rel="noopener noreferrer">
                                <Styledimg src={fbmessenger} alt="message" /></AStyled>                           
                           <div style={{clear: "right"}}/>   */}
                    </div>
                    <div className="col-2"/>
                </div>
              </div>
            </div>                       
            </PageContainer>   
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            excerpt
            timeToRead
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
            id
            html
        }
    }
`

export default Blog