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
    
const Coursefees = (props) => (
    <Layout>
        <Helmet>
            <title>Course Fees</title>
            <meta name="description" content="Course Fees - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Course Fees</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <h2>Exclusive Discount on Tuition & Course Fees</h2>
                            <Ulist>                                
                                <li className="icon fa-check-square-o"> Short Courses/Certification</li> 
                                <li className="icon fa-check-square-o"> Higher Education (Degree, Diploma)</li>
                            </Ulist>    
                            <hr className="major"/>                    
                        </div>
                        
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Coursefees

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
    image01: file(relativePath: { eq: "informaticscollege.png" }) {
      ...fluidImage
    }
  }
  `