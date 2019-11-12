import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const ContainerCard = styled.div`  
    background-color:white;  
    h3{color:#046880};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }

    hr.line1 {border-top: 1px solid white;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1rem auto;  
    `

const Freebies = (props) => (
    <Layout>
        <Helmet>
            <title>Freebies and Discounts</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Freebies and Discounts</h1>
                    </header>
                    
                    <h2>Freebies</h2>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>FREE Doctor's Consultation</h3>
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <p>Unlimited outpatient consultations in any Kaiser Medical Center clinics.</p>
                            <Link to="/privileges/freebiesdiscounts/freeconsultation" className="button special small">Learn more</Link>                        
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>FREE Eyeglasses Frames</h3>
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>Free frames for every multi-coated lens purchased from Site for Eyes.</p> 
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Online Marketing Tools</h3>
                            <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <p>Free account to make your own website for online marketing.</p>
                        </ContainerCard>
                        </div>
                    </div>
                    
                    <hr className="major" />
                
                    <h2>Discounts</h2>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Non-Life Insurance</h3>
                            <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                            <p>Save money while insuring your car and house.</p>                           
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Auto Program</h3>
                            <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                            <p>Get discounts when purchasing your brand new car.</p>
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Course Fees</h3>
                            <span className="image fit"><Img fluid={props.data.image06.childImageSharp.fluid} /></span>
                            <p>Tuition fee discounts with our partner computer schools.</p>
                        </ContainerCard>
                        </div>
                    </div>
                  
                </div>
            </section>
        </div>
    </Layout>
)
export default Freebies

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
    image01: file(relativePath: { eq: "consultdoctor.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "eyeglasses.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "onlinemarketing.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "nonlife.jpg" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "autoprogram.jpg" }) {
        ...fluidImage
    }
    image06: file(relativePath: { eq: "coursefee.jpg" }) {
        ...fluidImage
    }
  }
  `