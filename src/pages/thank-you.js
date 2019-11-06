import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Container = styled.div`  
    background-color: #DCE1E5;  
    h1{color:black};
    h2{color:black};    
    color: black;

    .button{
        background-color:#221D71;
        color:white;     
    }
    padding: 15px;
    margin: 3rem auto;
    max-width: 800px;
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `


const Thankyou = (props) => (
    <Layout>
        <Helmet>
            <title>Thank You - IMG Channel</title>
            <meta name="description" content="Thank You Page" />
        </Helmet>
        <Container>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">                           
                    <div className="grid-wrapper">                 
                        <div className="col-12">                                                      
                            <h1>Submit Successful!</h1>
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <h2>Thank you very much.</h2>
                        </div>                    
                    </div>             
                </div>
            </section>
        </div>
        </Container>
    </Layout>
)

export default Thankyou

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
    image01: file(relativePath: { eq: "thank-you.jpg" }) {
      ...fluidImage
    }
  }
  `