import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const SubHeader2 = styled.h2`
    font-size: 1.9em;
    line-height: .9em;
    margin: 0;
`

    const ContainerCardHealth = styled.div`  
        background-color:white;  
        h3{
            color:#046880;
            line-height: 1.2em;
            margin: 0 0 .2em 0;
            font-size: 1.5em;
        }
        color: black;
        .button{
            background-color:#3277B3;
            color:white;     
        }

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 25px;
        margin: 1rem auto;
        p{
            line-height: 1.25em;
            margin: .4em 0 .5em 0;
        }
    `
    const ContainerCardLife = styled.div`  
        background-color:white;  
        h3{
            color:#1A237E;
            line-height: 1.2em;
            margin: 0 0 .2em 0;
            font-size: 1.5em;
        }
        color: black;
        .button{
            background-color:#3277B3;
            color:white;     
        }

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 25px;
        margin: 1rem auto;   
        p{
            line-height: 1.25em;
            margin: .4em 0 .5em 0;
        }
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
                    
                    <SubHeader2>Healthcare plans</SubHeader2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Long-Term Care</h3>
                                <span><Img fluid={props.data.image01.childImageSharp.fluid} /></span>   
                                <p>Health Savings Program with Invesments to cover your retirement years.</p>                            
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Short-Term Care</h3>
                                <span><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                <p>Healthcare coverage for you and your family while you're still employed.</p>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Senior Care</h3>
                                <span><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <p>Healthcare coverage for seniors from 61-100 years of age.</p>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                            </ContainerCardHealth>
                            </div>
                        </div>
                  
                    <hr className="major" />
                
                    <SubHeader2>Life Insurance</SubHeader2>
                    <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardLife>
                                <h3>Term Life Insurance</h3>
                                <span><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                <p>Most affordable income replacement while building your future.</p>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button small">Learn more</Link>
                            </ContainerCardLife>
                            </div>
                            <div className="col-4">
                            <ContainerCardLife>
                                <h3>Group Life Insurance</h3>
                                <span><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                                <p>Life and Accident Insurance for your organization.</p>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button small">Learn more</Link>
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