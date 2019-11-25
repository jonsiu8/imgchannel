import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../../assets/images/ogimage-investments.png'

    const ContainerCard = styled.div`  
        background-color:white;  
        h3{
            color:#046880;
            line-height: 1.2em;
            margin: 0 0 .2em 0;
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


const Investments = (props) => (
    <Layout>
        <Helmet>
            <title>Investments</title>
            <meta name="description" content="Investments - IMG Channel" />
            <meta property="og:title" content="Investments"/>
            <meta property="og:description" content="Let money work for you"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="graph" />
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
                            <span><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <p>Stress-free investing with great long term growth potential.</p>                            
                            <Link to="/privileges/investments/mutualfunds" className="button special small">Learn more</Link>
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Stock Market</h3>
                            <span><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>Stock market investing right at your fingertips.</p>
                            <Link to="/privileges/investments/stocktrading" className="button special small">Learn more</Link>
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Real Estate</h3>
                            <span><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <p>Expand your investment portfolio with properties.</p>
                            <Link to="/privileges/investments/realestate" className="button special small">Learn more</Link>
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