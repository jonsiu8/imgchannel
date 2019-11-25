import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import previewpic from '../assets/images/ogimage-affiliates.png'

const Container = styled.div`  
    background-color: white;  
    h3{color:black};    
    color: black;

    .button{
        background-color:#221D71;
        color:white;     
    }

    hr.line1 {
        border-top: 1px solid black;
    }     
    
    padding: 25px;
    margin: 3rem auto;
    max-width: 1200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `



const Affiliates = (props) => (
    <Layout>
        <Helmet>
            <title>Affiliates</title>
            <meta name="description" content="Affiliates Page - IMG Channel" />
            <meta property="og:title" content="Affiliates"/>
            <meta property="og:description" content="Powerful Strategic Partners"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Last piece of a puzzle" />
        </Helmet>

        <section id="banner" className="style3">
            <div className="inner">
                <header className="major">
                    <h1>Affiliates</h1>
                </header>
                <div className="content">
                    <p>Our Powerful Strategic Partners</p>
                </div>
            </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    {/*<h2 id="content">Our Powerful Strategic Partners</h2>*/}
                    <Container>
                        <div className="grid-wrapper"> 
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            </div>     
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                            </div>                      
                        </div>
                        <div className="grid-wrapper"> 
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image06.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image07.childImageSharp.fluid} /></span>
                            </div>      
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image08.childImageSharp.fluid} /></span>
                            </div>                    
                        </div>
                        <div className="grid-wrapper"> 
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image09.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image10.childImageSharp.fluid} /></span>
                            </div>
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image11.childImageSharp.fluid} /></span>
                            </div>      
                            <div className="col-3">
                                <span className="image fit"><Img fluid={props.data.image12.childImageSharp.fluid} /></span>
                            </div>                    
                        </div>                       
                    </Container>
                    <Link to="/contact" className="button next">Contact us for more info </Link>
                </div>
            </section>
        </div>
    </Layout>
)

export default Affiliates


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
    image01: file(relativePath: { eq: "Affiliate01.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "Affiliate02.png" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "Affiliate03.png" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "Affiliate04.png" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "Affiliate05.png" }) {
        ...fluidImage
    }
    image06: file(relativePath: { eq: "Affiliate06.png" }) {
        ...fluidImage
    }
    image07: file(relativePath: { eq: "Affiliate07.png" }) {
        ...fluidImage
    }
    image08: file(relativePath: { eq: "Affiliate08.png" }) {
        ...fluidImage
    }
    image09: file(relativePath: { eq: "Affiliate09.png" }) {
        ...fluidImage
    }
    image10: file(relativePath: { eq: "Affiliate10.png" }) {
        ...fluidImage
    }
    image11: file(relativePath: { eq: "Affiliate11.png" }) {
        ...fluidImage
    }
    image12: file(relativePath: { eq: "Affiliate12.png" }) {
        ...fluidImage
    }
  }
  `