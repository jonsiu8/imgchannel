import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../assets/images/ogimage-privileges.png'

  const ContainerCard = styled.div`  
    background-color:white;  
    h3{
        color:black;
        line-height: 1.2em;
        margin: 0 0 .2em 0;
    }
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 2rem auto;
    p{
        line-height: 1.25em;
        margin: .4em 0 .5em 0;
    }
  `
const Privileges = (props) => (
    <Layout>
        <Helmet>
            <title>Privileges</title>
            <meta name="description" content="Privileges Page - IMG Channel" />
            <meta property="og:title" content="Privileges"/>
            <meta property="og:description" content="Exclusive Benefits for IMG Members"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Cupcake on hand" />
        </Helmet>

        <section id="banner" className="style2">
            <div className="inner">
                <header className="major">
                    <h1>Privileges</h1>
                </header>
                <div className="content">
                    <p>Benefits of IMG Members</p>
                </div>
            </div>
        </section>
        
        <div id="main" className="alt">
            <section id="one">            
                <div className="inner">                 
                    <div className="grid-wrapper">                         
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Financial Education</h3>
                            <span><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <p>Workshops, seminars, financial checkups, and more...</p>
                            <Link to="/privileges/financialeducation" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>                            
                                                
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Healthcare and Insurance</h3>
                            <span><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>Protect your family while building your wealth.</p>
                            <Link to="/privileges/healthcareandinsurance" className="button special small">Learn more</Link>                 
                        </ContainerCard>
                        </div>      
                                    
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Investments</h3>
                            <span><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <p>Invest for your future and let your money work for you.</p>
                            <Link to="/privileges/investments" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>
                    </div>                        

                    <div className="grid-wrapper"> 
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Freebies and Discounts</h3>
                            <span><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                            <p>Enjoy exclusive discounts and free products and services.</p>
                            <Link to="/privileges/freebies" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>                            
                                        
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Career and Business</h3>
                            <span><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                            <p>Start your financial educator career and be in the financial industry business. </p>
                            <Link to="/privileges/career" className="button special small">Learn more</Link>
                        </ContainerCard>    
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Services</h3>
                            <span><Img fluid={props.data.image06.childImageSharp.fluid} /></span>
                            <p>Avail of these other services provided by our partners.</p>
                            <Link to="/privileges/services" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>
                    </div>                       
                </div>                
            </section>           
        </div>
    </Layout>
)

export default Privileges

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
    image01: file(relativePath: { eq: "privileges01.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "privileges02.png" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "privileges03.png" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "privileges04.png" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "privileges05.png" }) {
        ...fluidImage
    }
    image06: file(relativePath: { eq: "privileges06.png" }) {
        ...fluidImage
    }
  }
  `