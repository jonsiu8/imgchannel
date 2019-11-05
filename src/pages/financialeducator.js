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
  font-size: 21px;
    @media (max-width: 768px) {
    font-size: 18px;
  }
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
                    <div className="col-4">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            {/* <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" target="_blank" rel="noopener noreferrer" className="button small">Start my Career</a></li>
                            </ul> */}
                            <Link to="/joining" className="button">Start my Career</Link>
                            </ContainerCard>
                        </div>            
                        <div className="col-8">
                            <h3>We believe that financial literacy is the key to financial freedom.</h3>
                            <h3>Help make a difference for familes.</h3>                          
                                <div className="grid-wrapper">
                                <div className="col-6">
                                    <Ulist>
                                    <p><b>Responsibilities</b></p>
                                        <li className="icon fa-check-square-o"> Attend workshops & training</li> 
                                        <li className="icon fa-check-square-o"> Campaign for financial literacy</li> 
                                        <li className="icon fa-check-square-o"> Join webinars & meetings</li> 
                                        <li className="icon fa-check-square-o"> Have your financial checkup</li> 
                                        <li className="icon fa-check-square-o"> Work with the team</li>
                                        <li className="icon fa-check-square-o"> Enjoy!</li>
                                    </Ulist>    
                                </div>
                                <div className="col-6">
                                    <Ulist>
                                    <p><b>Privileges</b></p>
                                        <li className="icon fa-check-square-o"> Be guided by qualified mentors</li> 
                                        <li className="icon fa-check-square-o"> Build your financial foundation</li> 
                                        <li className="icon fa-check-square-o"> Get exclusive benefits</li> 
                                        <li className="icon fa-check-square-o"> Earn a good part time income</li> 
                                        <li className="icon fa-check-square-o"> Excellent support system</li>
                                        <li className="icon fa-check-square-o"> NO QUOTAS</li> 
                                    </Ulist>                       
                                </div>
                            </div>
                            {/* <Link to="/privileges" className="button small">Learn more</Link>*/}
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
                    <Container>
                        <div className="grid-wrapper">

                            <div className="col-6">
                                <h3>Compensation</h3>
                                <p>Once you're coded and passed the basic accreditation, you can potentially earn referral bonuses and commissions
                                    by serving people through financial education.</p>
                                <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                                <hr className="line1"/>
                            </div>

                            {/* <div className="col-6">             
                                <div className="grid-wrapper">
                                   <p>Associate</p>
                                   <p>20%</p>
                                   <p>Marketing Director</p>
                                   <p>37%</p>
                                   <p>Senior Marketing Director</p>
                                   <p>47%</p>
                                </div>
                            </div> */}

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
    image05: file(relativePath: { eq: "compensation.jpg" }) {
        ...fluidImage
    }
  }
  `