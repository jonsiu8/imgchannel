import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerMember from '../components/BannerMember'
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
    margin: 2rem auto;
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
        </Helmet>

        <BannerMember />
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">              
                    <h2>IMG Preferred Member Benefits</h2>                                  
                    <Container>
                    <div className="grid-wrapper">              
                        <div className="col-6">                    
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
                            <Link to="/privileges" className="button small">more privileges here</Link>   
                        </div>
                        <div className="col-6">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <Link to="/joining" className="button">Become an IMG Member now</Link>
                            {/* <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button small">Become an IMG Member Now</a></li>
                            </ul> */}
                            {/* <Link to="/becomeamember" className="button small">Become an IMG Member Now</Link>*/}
                            </ContainerCard>
                        </div>
                    </div>
                    </Container>
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
  }
  `