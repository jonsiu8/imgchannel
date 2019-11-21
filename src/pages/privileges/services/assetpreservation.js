import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const SubHeader2 = styled.h2`
    line-height: 1.1em;
    margin: 0 0 1em 0;
`

const SubHeader3 = styled.h3`
    line-height: 1.25em;
    margin: 0 0 .3em 0;
`

const Content = styled.p`
    margin: 0 0 2em 0;
    line-height: 1.4em;
`
    
const Assetpreservation = (props) => (
    <Layout>
        <Helmet>
            <title>Asset Preservation Service</title>
            <meta name="description" content="Asset Preservation Service - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Asset Preservation Service</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-7">
                            <h1>Preserve your Wealth</h1>                         
                            <SubHeader2>Protect your ASSETS by creating your own corporation through IMG at a member’s exclusive price</SubHeader2>                                        
                        </div>
                        <div className="col-12"><SubHeader2>Some benefits of setting up a corporation</SubHeader2></div>                        
                        <div className="col-4">
                            <SubHeader3>Easy Transfer</SubHeader3>
                            <Content>While you can't live forever, a corporation can.  Despite the death of a stockholder of a corporation, 
                                the corporation's existence remains.  It can easily transfer the corporation's assets  through simple 
                                board resolution.</Content>
                        </div>                       
                        <div className="col-4">
                            <SubHeader3>Protection of Assets</SubHeader3>
                            <Content>Stockholders of a corporation enjoy a personality separate and distinct from a corporation.  Creditors 
                                cannot pursue a stockholder's personal possession to pay off debts incurred by the corporation.</Content>
                        </div>
                        <div className="col-4">
                            <SubHeader3>Gain Tax Breaks</SubHeader3>
                            <Content>Corporations have tax advantages.  It may own in its name properties, bank accounts,  and investments.  
                                There is no need to pay estate tax or capital gains tax when assets are transferred or sold from its name.</Content>
                        </div>                          
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Assetpreservation

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
    image01: file(relativePath: { eq: "apsbanner.png" }) {
      ...fluidImage
    }
  }
  `