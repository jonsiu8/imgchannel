import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Autoprogram = (props) => (
    <Layout>
        <Helmet>
            <title>Auto Program</title>
            <meta name="description" content="Auto Program - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Auto Program</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <h2>Get HUGE savings and personalized assistance</h2>
                            <h3>and Enjoy a HASSLE-FREE car purchase experience</h3>
                            <p>Email: membersassistance@img-corp.net</p>
                            <hr className="major"/>                    
                        </div>
                        
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Autoprogram

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
    image01: file(relativePath: { eq: "autoprogrambanner.png" }) {
      ...fluidImage
    }
  }
  `