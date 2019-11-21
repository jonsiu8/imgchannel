import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const SubHeader3 = styled.h3`
  line-height: 1.2em;
`

const SubHeader2 = styled.h2`
  line-height: 1.2em;
`

const Content = styled.p`
  line-height: 1.2em;
`
    
const Mutualfunds = (props) => (
    <Layout>
        <Helmet>
            <title>Mutual Funds</title>
            <meta name="description" content="Mutual Funds - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Mutual Funds</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-6">                          
                            <SubHeader2>Invest in Mutual Funds at 0% Entry Fee*</SubHeader2>
                            <SubHeader2>Free Access to Investment Seminars</SubHeader2>
                            <SubHeader3>Start investing from as low as P1,000</SubHeader3>
                            <Content>*Exclusive to IMG members</Content>
                            <hr className="major"/>                    
                        </div>                                         
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Mutualfunds

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
    image01: file(relativePath: { eq: "mfpartners.png" }) {
      ...fluidImage
    }
  }
  `