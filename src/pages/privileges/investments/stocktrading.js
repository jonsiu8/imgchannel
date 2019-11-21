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
    
const Stocktrading = (props) => (
    <Layout>
        <Helmet>
            <title>Stock Trading</title>
            <meta name="description" content="Stock Trading - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Stock Trading</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <SubHeader2>MyTrade Online Stock Market Trading Platform</SubHeader2>
                            <SubHeader3>with FREE investment guidance, analysis & updates</SubHeader3>
                            <Content>Trade using your mobile devices through the MyTrade App</Content>
                            <hr className="major"/>                    
                        </div>                                         
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Stocktrading

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
    image01: file(relativePath: { eq: "mytradebanner.png" }) {
      ...fluidImage
    }
  }
  `