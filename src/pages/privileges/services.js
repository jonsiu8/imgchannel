import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

    const ContainerCard = styled.div`  
        background-color:white;  
        h3{
            color:#046880;
            line-height: 1.2em;
            margin: 0 0 .2em 0;
        }
        color: black;
        .button{
            background-color:#3277B3;
            color:white;     
        }

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 25px;
        margin: 1rem auto; 

        p{
            line-height: 1.25em;
            margin: .4em 0 .5em 0;
        }
    `
const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services - IMG Channel" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">                    
                    <header className="major">
                        <h1>More Services</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Asset Preservation Service</h3>
                            <span><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <p>Preserve your wealth and don't let a lifetime of savings be devoured by taxes.</p>
                            <Link to="/privileges/services/assetpreservation" className="button special small">Learn more</Link>                     
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Exclusive Memorial Service</h3>
                            <span><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>Convenience and peace of mind... when your family need it the most.</p>
                            <Link to="/privileges/services/everest" className="button special small">Learn more</Link>
                        </ContainerCard>                            
                        </div>
                    </div>          
                </div>
            </section>
        </div>
    </Layout>
)
export default Services

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
    image01: file(relativePath: { eq: "assetpreservation.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "everest.jpg" }) {
        ...fluidImage
    }
  }
  `