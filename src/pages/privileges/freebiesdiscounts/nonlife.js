import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const Ulist = styled.ul`  
  list-style-type: none;
  color:white;
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
    
const Nonlife = (props) => (
    <Layout>
        <Helmet>
            <title>Non Life Insurance</title>
            <meta name="description" content="Non Life Insurance - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Non Life Insurance</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-6">                          
                            <h2>Save Money on your Non-Life Insurance</h2>
                            <Ulist>                                
                                <li className="icon fa-check-square-o"> Car Insurance</li> 
                                <li className="icon fa-check-square-o"> Travel Insurance</li>
                                <li className="icon fa-check-square-o"> Fire Insurance</li>
                                <li className="icon fa-check-square-o"> Personal Accident</li>
                                <li className="icon fa-check-square-o"> Bond</li>
                                <li className="icon fa-check-square-o"> Marine Cargo</li>
                            </Ulist>                           
                            <p>Call: 586 5471 Local 553<br/>
                                Email: nonlife@img-corp.com</p>
                            <hr className="major"/>                    
                        </div>                                         
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Nonlife

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
    image01: file(relativePath: { eq: "nonlifepartners.png" }) {
      ...fluidImage
    }
  }
  `