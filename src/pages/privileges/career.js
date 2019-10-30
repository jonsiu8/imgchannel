import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
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
const Career = (props) => (
    <Layout>
        <Helmet>
            <title>Career & Business</title>
            <meta name="description" content="Career and Business - IMG Channel"/>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Career and Business</h1>
                    </header>                    
                    <Container>
                    <div className="grid-wrapper">              
                        <div className="col-8">
                            <h2>Financial Educator Career</h2>                        
                            <h4>Join our growing team of financial educators and be part of a great campaign.</h4>
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <Ulist>
                                        <p><b>Privileges</b></p>
                                        <li className="icon fa-thumbs-up"> Be guided by qualified mentors</li> 
                                        <li className="icon fa-thumbs-up"> Build your financial foundation</li> 
                                        <li className="icon fa-thumbs-up"> Get exclusive benefits</li> 
                                        <li className="icon fa-thumbs-up"> Earn a good part time income</li> 
                                        <li className="icon fa-thumbs-up"> Excellent support system</li>
                                        <li className="icon fa-thumbs-up"> NO QUOTAS</li>   
                                    </Ulist>    
                                </div>
                                <div className="col-6">
                                    <Ulist>
                                        <p><b>Responsibilities</b></p>
                                        <li className="icon fa-thumbs-up"> Attend workshops & training</li> 
                                        <li className="icon fa-thumbs-up"> Campaign for financial literacy</li> 
                                        <li className="icon fa-thumbs-up"> Join webinars & meetings</li> 
                                        <li className="icon fa-thumbs-up"> Have your financial checkup</li> 
                                        <li className="icon fa-thumbs-up"> Work with the team</li>
                                        <li className="icon fa-thumbs-up"> Enjoy!</li>   
                                    </Ulist>                       
                                </div>
                            </div>                              
                        </div>
                        <div className="col-4">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <Link to="/becomeamember" className="button small">become a financial educator</Link>   
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
export default Career

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