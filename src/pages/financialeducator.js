import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../assets/images/ogimage-financialeducator.png'
import compensation from '../assets/images/compensation.png'

const Header1 = styled.h1`
    margin: 0 0 0.8em 0;
    line-height: 1em;
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
        margin: 0 0 1em 0;
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
    font-size: 21px;
    li {
        line-height: 1.2em;
        margin: 0 0 .5em 0;
    }

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

  const SpanIcon = styled.span`
    color: #058340;
    font-size: 1.1em;
`

const Financialeducator = (props) => (
    <Layout>
        <Helmet>
            <title>Financial Educator Career</title>
            <meta name="description" content="Financial Educator Career - IMG Channel" />
            <meta property="og:title" content="Financial Educator Career"/>
            <meta property="og:description" content="Be a Campaigner for Financial Literacy"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Teaching" />
        </Helmet>

        <section id="banner" className="style1">
            <div className="inner">
                <header className="major">
                    <h1>Financial Educator</h1>
                </header>
                <div className="content">
                    <p>A campaigner for financial literacy</p>
                </div>
            </div>
        </section>
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">              
                    <Header1>The Era of the Informed Consumer</Header1> 
                    <StyledContent>From do-it-yourself home improvement to self booking travel, and online shopping, more and more people
                        are learning how to get better deals and save more money on products and services.    
                    </StyledContent>        
                    <StyledContent>IMG is a new concept in the financial industry that assists people who want to help themselves in
                        building their financial foundation.  Thousands of people from all walks of life across the globe have enjoyed
                        IMG's platform of financial literacy and membership benefits.
                    </StyledContent>                   
                    <Container>
                    <div className="grid-wrapper">
                    <div className="col-4">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            {/* <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" target="_blank" rel="noopener noreferrer" className="button small">Start my Career</a></li>
                            </ul> */}
                            <Link to="/contact" className="button">Send a message</Link>
                            </ContainerCard>
                        </div>            
                        <div className="col-8">
                            <h3>We believe that financial literacy is the key to financial freedom.</h3>
                            <h3>Help make a difference for familes.</h3>                          
                                <div className="grid-wrapper">
                                <div className="col-6">
                                    <Ulist>
                                    <h4>Responsibilities</h4>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Attend workshops & training</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Campaign for financial literacy</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Join webinars & meetings</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Have your financial checkup</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Work with the team</li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Enjoy!</li>
                                    </Ulist>    
                                </div>
                                <div className="col-6">
                                    <Ulist>
                                    <h4>Privileges</h4>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Be guided by qualified mentors</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Build your financial foundation</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Get exclusive benefits</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Earn a good part time income</li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Excellent support system</li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> NO QUOTAS</li> 
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
                                <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                <h3>Personal Finance Proficiency</h3>
                                <p>Gain knowledge and financial wisdom while having a freelance career.</p>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <h3>Rewards & Travel Incentives</h3> 
                                <p>Travel around the world and be recognized for your efforts.</p>
                            </div>
                            <div className="col-4">          
                                <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                <h3>Build a Big Business</h3>
                                <p>Make a difference and leave a legacy through entrepreneurship.</p>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid-wrapper">
                            <div className="col-4">             
                                <h3>Compensation</h3>
                                <span className="image left"><img src={compensation} alt="" /></span>
                                <p>Once you are a member and passed the basic accreditation reuirements, you can potentially earn referral bonuses and commissions
                                    by serving people through financial education.</p>
                                <p>As an IMG partner, you may earn a part time income of P10,000 to P100,000+
                                    depending of course on your personal efforts and commitment.  You decide how much you want to earn.
                                </p>
                                <hr/>
                            </div>

                            <div className="col-8">
                                <h3>Partners' Contract</h3>
                                <span className="image fit"><Img fluid={props.data.image06.childImageSharp.fluid} /></span>
                                {/* <Ulist1>                            
                                <li className="icon fa-user"> Associate - 20%</li>
                                <li className="icon fa-user"> Marketing Director - 37%</li> 
                                <li className="icon fa-user"> Senior Marketing Director - 47%</li> 
                                </Ulist1> */}
                            </div>
                        </div>
                    </Container>                 
                    <Link to="/contact" className="button next">Contact us for more info </Link>
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
    image01: file(relativePath: { eq: "associatecampaign.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "personalfinanceproficient.png" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "rewardstravel.png" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "buildbiz.png" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "compensation.png" }) {
        ...fluidImage
    }
    image06: file(relativePath: { eq: "contractimg.png" }) {
        ...fluidImage
    }
  }
  `