import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerEducator from '../components/BannerEducator'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

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
    h2{
        color:black;
        margin: 1rem auto;
    }
    h3{color:black};
    h4{
        color:black;
        margin:5px;
    }    

    p { color:black;
        margin:1px;
    }
    b { color:black;
        margin:1px;
    }

    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const Ulist = styled.ul`  
  list-style-type: none;
  color:black;
`
const Financialeducator = (props) => (
    <Layout>
        <Helmet>
            <title>Be a Financial Educator</title>
            <meta name="description" content="Be a Financial Educator - IMG Channel" />
        </Helmet>

        <BannerEducator />
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">              
                    <h2>Financial Educator Career</h2>                                  
                    <Container>
                    <div className="grid-wrapper">              
                        <div className="col-6">                    
                            <h3>Enjoy all privileges of being a member.<br/>
                                Here are some of them:</h3>                          
                            <Ulist>                                
                                <li className="icon fa-thumbs-up"> Financial Education</li> 
                                <li className="icon fa-thumbs-up"> Free Financial Checkup</li> 
                                <li className="icon fa-thumbs-up"> Access to Financial Services</li> 
                                <li className="icon fa-thumbs-up"> Freebies and Discounts</li> 
                                <li className="icon fa-thumbs-up"> Mutual Fund Investments</li>
                                <li className="icon fa-thumbs-up"> Freelance Business</li>
                                <li className="icon fa-thumbs-up"> and many more...</li>   
                            </Ulist>
                            <Link to="/privileges" className="button small">Learn more</Link>   
                        </div>
                        <div className="col-6">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <Link to="/becomeamember" className="button small">Start a Career</Link>   
                            </ContainerCard>
                        </div>
                    </div>
                    </Container>                  
       
                    <Container>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                                <h3>Personal Finance Mastery</h3>
                                <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                <p>Gain knowledge and financial wisdom while having a freelance career.</p>
                                <hr className="line1"/>
                            </div>
                            <div className="col-4">    
                                <h3>Rewards & Travel Incentives</h3>         
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <p>Travel around the world and be recognized for your efforts.</p>
                                <hr className="line1"/>
                            </div>
                            <div className="col-4">    
                                <h3>Build a Big Business</h3>         
                                <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                <p>Make a difference and leave a legacy through entrepreneurship.</p>
                                <hr className="line1"/>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </div>




    </Layout>
)

export default Financialeducator

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
  }
  `