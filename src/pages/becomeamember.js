import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import previewpic from '../assets/images/ogimage-becomeamember.png'

const Header1 = styled.h1`
    margin: 0 0 0.125em 0;
    line-height: 1.25em;
`

const StyledContent = styled.p`
    font-size: 1.3em;
    line-height: 1.25em;
`

const ContainerCard = styled.div`  
    background-color:#3277B3;  
    h2{color:black}; 
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid white;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1rem auto;    
    `
    const Container = styled.div`  
    background-color:white; 
 
    h1, h2, h3 { 
        color:black;
        line-height: 1.25em;
        margin: 0 0 .5em 0;
    }

    h4 { 
        color:#0B258F;
        line-height: 1.25em;
        margin: 0 0 .3em 0;
    }  

    p { color:black;
        margin: 0 0 2em 0;
        line-height: 1.25em;
    }
    b { color:black;
        margin:0;
    }

    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 30px;
    margin: 1rem auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const Ulist = styled.ul`  
  list-style-type: none;
  color:black;
  font-size: 26px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const Becomeamember = (props) => (
    <Layout>
        <Helmet>
            <title>Become a Member</title>
            <meta name="description" content="Become a Member - IMG Channel" />
            <meta property="og:title" content="Become a Member"/>
            <meta property="og:description" content="Join the Campaign"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Team Selfie" />
        </Helmet>

        <section id="banner" className="style4">
            <div className="inner">
                <header className="major">
                    <h1>Become a Member</h1>
                </header>
                <div className="content">
                    {/* <p>Join the campaign for financial literacy and start your journey to financial freedom.</p> */}
                    <p>Be part of the movement</p>
                </div>
            </div>
        </section>
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <div className="grid-wrapper">
                        <div className="col-4">
                        <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                        </div>
                        <div className="col-8">
                            <Header1>What's in it for you?</Header1>
                            <StyledContent>Our campaign for financial literacy is to educate <b>10 million families by the year 2025 </b>
                                and help them build a solid financial foundation.  You and your family will be starting a new 
                                tradition where you will learn how to have enough savings, zero debts, and investments for your future.
                            </StyledContent>
                        </div>
                    </div>                               
                    <Container>
                    <div className="grid-wrapper">              
                        <div className="col-6">         
                            <h2>IMG Preferred Member Benefits</h2>           
                            <h3>Enjoy the privileges of being a member.</h3>                          
                            <Ulist>                                
                                <li className="icon fa-check-square-o"> Financial Education</li> 
                                <li className="icon fa-check-square-o"> Free Financial Checkup</li> 
                                <li className="icon fa-check-square-o"> Access to Financial Services</li> 
                                <li className="icon fa-check-square-o"> Freebies and Discounts</li> 
                                <li className="icon fa-check-square-o"> Mutual Fund Investments</li>
                                <li className="icon fa-check-square-o"> Freelance Business</li>
                                <li className="icon fa-check-square-o"> and many more...</li>   
                            </Ulist>
                            <Link to="/privileges" className="button small">more privileges...</Link>   
                        </div>
                        <div className="col-6">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <Link to="/joining" className="button small">Become an IMG Member now</Link>
                            {/* <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button small">Become an IMG Member Now</a></li>
                            </ul> */}
                            {/* <Link to="/becomeamember" className="button small">Become an IMG Member Now</Link>*/}
                            </ContainerCard>
                        </div>
                    </div>
                    </Container>
                    <Link to="/contact" className="button next">Contact us for more info </Link>
                </div>
            </section>
        </div>
    </Layout>
)

export default Becomeamember

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
    image01: file(relativePath: { eq: "fecareer.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "personalfinancemastery.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "travel.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "buildbiz.jpg" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "movement10M2025.jpg" }) {
        ...fluidImage
    }
  }
  `