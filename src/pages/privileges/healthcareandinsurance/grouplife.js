import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Grouplife = (props) => (
    <Layout>
        <Helmet>
            <title>Group Life Insurance</title>
            <meta name="description" content="Group Life - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Group Life Insurance</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-7">                          
                            <h2>P50,000 Life Insurance* for all IMG Members</h2>
                            <h3>with 24/7 memorial concierge service tie-up with Everest</h3>
                            <p>* Need to fll out application form subject to underwriting process<br/>
                                * Pay one-time membership fee of P500 for Fidelity</p>
                            <hr className="major"/>                    
                        </div>
    
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-7">                          
                            <h2>P100,000 Personal Accident Insurance* for all IMG Members</h2>                            
                            <p>* Standard underwriting guidelines will apply</p>
                            <hr className="major"/>                       
                        </div>
                        <div className="col-12">
                            <h4>Contact us for more information about group life insurance.</h4>
                            <Link to="../../contact" className="button small">Contact</Link>
                        </div>                                            
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Grouplife

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
    image01: file(relativePath: { eq: "fidelitylife-banner.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "mblife-banner.png" }) {
        ...fluidImage
      }
  }
  `