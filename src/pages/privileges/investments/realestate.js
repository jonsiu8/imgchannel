import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Realestate = (props) => (
    <Layout>
        <Helmet>
            <title>Real Estate</title>
            <meta name="description" content="Real Estate - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Real Estate</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-5">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-7">                          
                            <h2>Get Discounts from Real Estate Companies</h2>
                            <h3>After building your proper financial foundation, you may now expand your portfolio through real estate investments</h3>
                            <p>*Discounts may vary depending on the type of property, company, location, etc.</p>
                            <hr className="major"/>                    
                        </div>                                         
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Realestate

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
    image01: file(relativePath: { eq: "realestatebanners.png" }) {
      ...fluidImage
    }
  }
  `