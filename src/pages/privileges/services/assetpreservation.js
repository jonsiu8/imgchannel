import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
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
                            <h2>Preserve your Wealth</h2>                         
                            <h3>Protect your ASSETS by creating your own corporation through IMG at a member’s exclusive price</h3>
                            <hr/>                                             
                        </div>
                        <div className="col-12"><h2>Some benefits of setting up a corporation</h2></div>                        
                        <div className="col-4">
                            <h3>Easy Transfer</h3>
                            <p>While you can't live forever, a corporation can.  Despite the death of a stockholder of a corporation, 
                                the corporation's existence remains.  It can easily transfer the corporation's assets  through simple 
                                board resolution.</p>
                            <hr/>
                        </div>                       
                        <div className="col-4">
                            <h3>Protection of Assets</h3>
                            <p>Stockholders of a corporation enjoy a personality separate and distinct from a corporation.  Creditors 
                                cannot pursue a stockholder's personal possession to pay off debts incurred by the corporation.</p>
                            <hr/>
                        </div>
                        <div className="col-4">
                            <h3>Gain Tax Breaks</h3>
                            <p>Corporations have tax advantages.  It may own in its name properties, bank accounts,  and investments.  
                                There is no need to pay estate tax or capital gains tax when assets are transferred or sold from its name.</p>
                            <hr/>
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