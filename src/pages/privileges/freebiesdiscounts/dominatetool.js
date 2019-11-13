import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Dominatetool = (props) => (
    <Layout>
        <Helmet>
            <title>Dominate Tool</title>
            <meta name="description" content="Dominate Tool - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Dominate Tool</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <h2>Digital Marketing Tools</h2>
                            <h3>Create Your Business Online with the World’s Most Powerful Online Tool for Marketers</h3>
                            <a href="http://imgcorp.com/dominate" target="_blank" rel="noopener noreferrer" className="button next">Open img dominate site</a>
                            <hr className="major"/>                    
                        </div>
                        
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Dominatetool

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
    image01: file(relativePath: { eq: "dominatetoolbanner.png" }) {
      ...fluidImage
    }
  }
  `