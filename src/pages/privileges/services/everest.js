import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Everest = (props) => (
    <Layout>
        <Helmet>
            <title>Everest</title>
            <meta name="description" content="Everest - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Everest Memorial Service</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-7">                          
                            <h2>The First 24/7 Memorial Concierge Service in the Philippines</h2>
                            <h3>Call: +63 917 1253288</h3>
                            <p>Convenience and peace of mind... when your family need it the most.<br/>
                                Email: familyassist@everestmemorial.com</p>
                            <hr className="major"/>                    
                        </div>                                         
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Everest

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
    image01: file(relativePath: { eq: "everestbanner.png" }) {
      ...fluidImage
    }
  }
  `