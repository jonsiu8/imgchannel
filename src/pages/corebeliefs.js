import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../assets/images/ogimage-corebeliefs.png'

const Container = styled.div`  
    background-color:white;  
    h2{
        color:black;
        line-height: 1.2em;
        margin: 0 0 .2em 0;
    }
    h3{color:black;}  

    p {
        line-height: 1.25em;
        margin: .4em 0 2.5em 0;
    }
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

const Corebeliefs = (props) => (
    <Layout>
        <Helmet>
            <title>Core beliefs</title>
            <meta name="description" content="Our Beliefs - IMG Channel" />
            <meta property="og:title" content="Core Beliefs"/>
            <meta property="og:description" content="Fight for something you really believe in"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Fighting Silhouette" />
        </Helmet>

        <section id="banner" className="style1">
            <div className="inner">
                <header className="major">
                    <h1>Core Beliefs</h1>
                </header>
                <div className="content">
                    <p>Fight for something you believe in</p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner"> 
                <h2>We Believe...</h2>             
                <Container>
                    <div className="grid-wrapper">                       
                        <div className="col-4">                                                       
                            <h2>Everyone Can Be Financially Independent</h2>
                            <span><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <p>Everyone can be financially independent given the right education, guidance and environment.</p>                                                                                       
                        </div>  
                        
                        <div className="col-4">                                                       
                            <h2>Everyone Deserves a Chance </h2>
                            <span><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>Everyone deserves a chance to improve and change for the better.<br/></p>                                                                                        
                        </div>  
                           
                        <div className="col-4">                                                       
                            <h2>Everyone Can Help or Serve</h2>
                            <span><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <p>Everyone can help or serve one person at a time.<br/></p>                                                                                       
                        </div>                                                
                    </div>      
                    </Container>
                    <Container>
                    <div className="grid-wrapper">                       
                        <div className="col-4">                                                     
                            <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>                       
                        </div>
                        <div className="col-3">                                                       
                            <h2>Join our global campaign for financial literacy.</h2>
                            <h3>Be part of the movement.</h3>                                              
                            <Link to="/becomeamember" className="button">Join the campaign</Link>                                                                   
                        </div>                              
                    </div>         
                    </Container>
                </div>
            </section>
        </div>
    </Layout>
)

export default Corebeliefs

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
    image01: file(relativePath: { eq: "corebelief01.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "corebelief02.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "corebelief03.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "globalcampaign.png" }) {
        ...fluidImage
    }
  }
  `