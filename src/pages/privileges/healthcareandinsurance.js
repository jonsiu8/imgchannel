import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

    const ContainerCardHealth = styled.div`  
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
    const ContainerCardLife = styled.div`  
        background-color:white;  
        h3{color:#1A237E};
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


const Healthcareandinsurance = (props) => (
    <Layout>
        <Helmet>
            <title>Healthcare and Insurance</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Healthcare and Insurance</h1>
                    </header>
                    
                    <h2>Healthcare plans</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Long-term care</h3>
                                <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>                               
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>                              
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Short-term care</h3>
                                <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Senior care</h3>
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                            </ContainerCardHealth>
                            </div>
                        </div>
                  
                    <hr className="major" />
                
                    <h2>Life Insurance</h2>
                    <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardLife>
                                <h3>Term life insurance</h3>
                                <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button small">Learn more</Link>
                            </ContainerCardLife>
                            </div>
                            <div className="col-4">
                            <ContainerCardLife>
                                <h3>Group life insurance</h3>
                                <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button small">Get a quote</Link>
                            </ContainerCardLife>
                            </div>
                        </div>
                 
                </div>
            </section>
        </div>
    </Layout>
)
export default Healthcareandinsurance

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
    image01: file(relativePath: { eq: "product-long-term.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "product-short-term.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "product-senior.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "terminsurance.jpg" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "groupinsurance.jpg" }) {
        ...fluidImage
    }
  }
  `