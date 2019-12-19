import React from "react"
import Layout from "../components/layout"
import Helmet from 'react-helmet'
import authors from '../util/authors'
import styled from "styled-components"
import { slugify } from '../util/utilityFunctions'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../assets/images/ogimage-contributors.jpg'

const PageContainer = styled.div`
    background-color: #ffffff;
    height: 100%;
    .button{
      background-color:#3277B3;
      color:white;
      margin: 0;
      padding: px;
    }  
` 

const AuthorContainer = styled.div`
  display: flex;
  margin: 0 0 1.5em 0;

  div { 
    //border: 1px #000000 solid;
  }

  h3 {
    color: #3277B3;
    color: #1a1a1a;
    margin: 0 0 0.2em 0;
    font-size: 1em;
    font-family: Georgia, serif;
    line-height: 1.35em;
    :hover {
      color: #3277B3;
      }
  }

  .box1 {
    flex: 1.4;
    align-items: center;
    margin: 0 0 0 0;
  }

  .box2 {
    flex: 4;
    align-items: center;
    margin: 0 0 0 .4em;
  }

  p {
    color: #666666;
    margin: 0 0 0 0;
    font-size: .75em;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  @media (max-width: 768px) {
    h3 {
        font-size: 1.1em;
    }

    p {
        font-size: .9em;        
    }
  }
`

const AuthorName = styled.h2`
  color: #1a1a1a;
  margin: 0 0 0 0;
  padding: 0px 0px 5px 0px;
  font-family: Georgia, serif;
  font-size: 1.0em;
  line-height: 1.2em;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1em;
}
`

const Ulist = styled.ul`  
  list-style-type: none;
  color:black;
  font-size: 1em;
  padding: 0px;
  margin: 0;

  li {
      font-size: 0.9em;
      margin: 0 0 .2em 0;
      line-height: 1.2em;
  }

    @media (max-width: 768px) {
         font-size: 1.05em;
     }
`

const ImgProfile = styled(Img)`
    margin: 0 0 0 0;
    padding: 0;
    max-width: 110px;
    border: 3px solid #3277B3;
    border-radius: 100%;
    @media (max-width: 768px) {
      max-width: 90px;
  }
`

const SpanIcon = styled.span`
  color: #3277B3;
  font-size: .65em;
`

const Contributors = (props) => (
  <Layout>
        <Helmet>
            <title>Conributors</title>
            <meta name="description" content="Contributors - IMG Channel" />
            <meta property="og:title" content="Contributors"/>
            <meta property="og:description" content="IMG Channel Blog Authors"/>
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="book and pen" />
        </Helmet>
       <section id="banner" className="style3">
          <div className="inner">
              <header className="major">
                  <h1>Contributors</h1>
              </header>
              <div className="content">
                  <p>IMG Channel Blog Authors</p>
              </div>
          </div>
      </section>
    <PageContainer>    
    <div id="main" className="alt">
      <div className="inner">
        <div className="grid-wrapper">

            <div className="col-4">
              <AuthorContainer>
                <div className="box1">
                    <ImgProfile fluid={props.data.authstelacoronica.childImageSharp.fluid} />                   
                </div>
                <div className="box2">
                    <AuthorName>{authors[0].name}</AuthorName> 
                    <Ulist>                             
                      <li><SpanIcon className="icon fa-circle"/> {authors[0].designation1}</li>
                      <li><SpanIcon className="icon fa-circle"/> {authors[0].designation2}</li> 
                      {/* <li><SpanIcon className="icon fa-circle"/> {authors[0].designation3}</li> */}
                      <a className="button small" href={`/author/${slugify(authors[0].name)}`}>View posts</a>
                    </Ulist>  
                </div>
              </AuthorContainer>
              <hr/>
            </div>

            <div className="col-4">
                <AuthorContainer>
                <div className="box1">
                    <ImgProfile fluid={props.data.authjessfaller.childImageSharp.fluid} />                   
                </div>
                <div className="box2">
                    <AuthorName>{authors[1].name}</AuthorName> 
                    <Ulist>                             
                      <li><SpanIcon className="icon fa-circle"/> {authors[1].designation1}</li>
                      <li><SpanIcon className="icon fa-circle"/> {authors[1].designation2}</li> 
                      <li><SpanIcon className="icon fa-circle"/> {authors[1].designation3}</li>
                      <a className="button small" href={`/author/${slugify(authors[1].name)}`}>View posts</a>
                    </Ulist>  
                </div>
              </AuthorContainer>
                <hr/>
            </div>

            <div className="col-4">
                <AuthorContainer>
                <div className="box1">
                    <ImgProfile fluid={props.data.authraminopiquez.childImageSharp.fluid} />                   
                </div>
                <div className="box2">
                    <AuthorName>{authors[2].name}</AuthorName> 
                    <Ulist>                             
                      <li><SpanIcon className="icon fa-circle"/> {authors[2].designation1}</li>
                      <li><SpanIcon className="icon fa-circle"/> {authors[2].designation2}</li> 
                      {/* <li><SpanIcon className="icon fa-circle"/> {authors[1].designation3}</li> */}
                      <a className="button small" href={`/author/${slugify(authors[2].name)}`}>View posts</a>
                    </Ulist>  
                </div>
              </AuthorContainer>
                <hr/>
            </div>

            <div className="col-4">
                <AuthorContainer>
                <div className="box1">
                    <ImgProfile fluid={props.data.authroseysardido.childImageSharp.fluid} />                   
                </div>
                <div className="box2">
                    <AuthorName>{authors[3].name}</AuthorName> 
                    <Ulist>                             
                      <li><SpanIcon className="icon fa-circle"/> {authors[3].designation1}</li>
                      <li><SpanIcon className="icon fa-circle"/> {authors[3].designation2}</li> 
                      {/* <li><SpanIcon className="icon fa-circle"/> {authors[3].designation3}</li> */}
                      <a className="button small" href={`/author/${slugify(authors[3].name)}`}>View posts</a>
                    </Ulist>  
                </div>
              </AuthorContainer>
                <hr/>
            </div>

            <div className="col-4">
                <AuthorContainer>
                <div className="box1">
                    <ImgProfile fluid={props.data.authjonsiu.childImageSharp.fluid} />                   
                </div>
                <div className="box2">
                    <AuthorName>{authors[4].name}</AuthorName> 
                    <Ulist>                             
                      <li><SpanIcon className="icon fa-circle"/> {authors[4].designation1}</li>
                      <li><SpanIcon className="icon fa-circle"/> {authors[4].designation2}</li> 
                      {/* <li><SpanIcon className="icon fa-circle"/> {authors[4].designation3}</li> */}
                      <a className="button small" href={`/author/${slugify(authors[4].name)}`}>View posts</a>
                    </Ulist>  
                </div>
              </AuthorContainer>
                <hr/>
            </div>

        </div>
      </div>        
    </div>
          
    
    </PageContainer>
  </Layout>
)

export default Contributors

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    authjessfaller: file(relativePath: { eq: "authjessfaller.jpg" }) {
      ...fluidImage
    }
    authjonsiu: file(relativePath: { eq: "authjonsiu.jpg" }) {
        ...fluidImage
    }
    authraminopiquez: file(relativePath: { eq: "authraminopiquez.jpg" }) {
        ...fluidImage
    }
    authroseysardido: file(relativePath: { eq: "authroseysardido.jpg" }) {
      ...fluidImage
    }
    authstelacoronica: file(relativePath: { eq: "authstelacoronica.jpg" }) {
      ...fluidImage
    }
  }
  `
