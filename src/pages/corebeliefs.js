import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import BannerBeliefs from '../components/BannerBeliefs'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Container = styled.div`  
    background-color:white;  
    h2{color:black};    
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
            <meta name="description" content="Our beliefs Page" />
        </Helmet>

        <BannerBeliefs/>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">                 
                <Container>
                    <div className="grid-wrapper">                       
                        <div className="col-4">                                                       
                            <h2>Everyone can be financially independent</h2>
                            <p><span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            Everyone can be financially independent given the right education, guidance and environment.
                            </p>                                                                                       
                        </div>  
                        
                        <div className="col-4">                                                       
                            <h2>Everyone deserves a chance </h2>
                            <p><span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            Everyone deserves a chance to improve and change their situation.<br/>
                            </p>                                                                                        
                        </div>  
                           
                        <div className="col-4">                                                       
                            <h2>Everyone can help anyone</h2>
                            <p><span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            Everyone can provide help to anyone who needs it.<br/>
                            </p>                                                                                       
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