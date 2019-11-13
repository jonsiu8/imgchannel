import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Freeframes = (props) => (
    <Layout>
        <Helmet>
            <title>Free Eyeglasses Frames</title>
            <meta name="description" content="Free Eyeglasses Frames - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Free Eyeglasses Frames</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <h2>Vision Care</h2>
                            <h3>Free IMG and Kaiser Frames</h3>
                            <p>with Mutli-Coated Lens purchase (Maximum of 2 pairs per year)</p>
                            <hr className="major"/>                    
                        </div>
                        
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Freeframes

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
    image01: file(relativePath: { eq: "dlrbanner.png" }) {
      ...fluidImage
    }
  }
  `