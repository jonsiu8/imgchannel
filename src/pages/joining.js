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
  font-size: 26px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const Joining = (props) => (
    <Layout>
        <Helmet>
            <title>Joining</title>
            <meta name="description" content="Joining - IMG Channel" />
        </Helmet>
        
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">              
                    <h2>How to Join</h2>                                  
                    <Container>                         
                    <div className="grid-wrapper">              
                            <div className="col-12">
                                <h3>Step 1</h3>
                                <p>Click the "REGISTER" button and you will open another window to the IMG registration site.</p>                              
                                <ul className="actions">                                
                                    <li><a href="https://img-corp.net/register.php?agentcode=6110hk" 
                                        target="_blank" rel="noopener noreferrer" className="button small">Register</a>
                                    </li>
                                </ul>
                                <p>If you're in the Philippines the page will look like this...<br/>
                                    Zoom in if you need to.
                                </p>
                                <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                         
                                
                                <hr className="line1"/>
                            </div>
                            {/* <div className="col-6">    
                                <h3>Rewards & Travel Incentives</h3>         
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <p>Travel around the world and be recognized for your efforts.</p>
                                <hr className="line1"/>
                            </div> */}
                        </div>
                    </Container>                  
       
                    {/* <Container>
                        <div className="col-6">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" target="_blank" rel="noopener noreferrer" className="button small">Register</a></li>
                            </ul>                  
                            </ContainerCard>
                        </div>
                        
                    </Container> */}
                </div>
            </section>
        </div>




    </Layout>
)

export default Joining

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
    image01: file(relativePath: { eq: "RegisterIntl.png" }) {
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