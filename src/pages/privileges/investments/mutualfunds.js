import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
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
                            <h2>Invest in Mutual Funds at 0% Entry Fee*</h2>
                            <h2>Free Access to Investment Seminars</h2>
                            <h3>Start investing from as low as P1,000</h3>
                            <p>*Exclusive to IMG members</p>
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