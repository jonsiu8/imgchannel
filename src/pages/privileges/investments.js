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


const Investments = (props) => (
    <Layout>
        <Helmet>
            <title>Investments</title>
            <meta name="description" content="Investments - IMG Channel" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">                    
                    <header className="major">
                        <h1>Investments</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Mutual Funds</h3>
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>                               
                            <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>                              
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Stock Market</h3>
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Real Estate</h3>
                            <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>
                    </div>          
                </div>
            </section>
        </div>
    </Layout>
)
export default Investments

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
    image01: file(relativePath: { eq: "mutualfund.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "stocktrading.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "realestate.jpg" }) {
        ...fluidImage
    }
  }
  `