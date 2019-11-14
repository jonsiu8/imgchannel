import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const ContainerCard = styled.div`  
    background-color:#DCE1E5;  
    color:black;

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
    h3{
        color:black;
        margin: 1rem auto;
    }
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
    max-width: 1080;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
                            <div className="col-6">
                                <h3>Step 1 - Registration Site</h3>
                                <p>Click the "REGISTER" button and it will open another window to the IMG registration site. 
                                    <a href="https://img-corp.net/register.php" target="_blank" rel="noopener noreferrer" className="button next">Register</a></p>                           
                                {/* <ul className="actions">                                
                                    <li><a href="https://img-corp.net/register.php?agentcode=6110hk" 
                                        target="_blank" rel="noopener noreferrer" className="button next">Register</a>
                                    </li>
                                </ul> */}
                                <ContainerCard>
                                    <p>It defaults in your current country.</p >
                                    <p>Choose PH if you're based in the Philippines.</p>
                                    <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-6">
                                <h3>Step 2 - Confirm Agent's Name</h3>
                                <p>Check the "AGENT" name below - this should be your Sponsor's name.   Change agent if necessary.</p>
                                <ContainerCard>
                                    {/* <p> If you're ABROAD it's like this <i className="icon fa-arrow-down"/></p> */}
                                    <p>Ask for your Sponsor's AgentCode and <b>change agent</b> accordingly.</p>
                                    <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-12">
                                <h3>Step 3 - Fill up the Form </h3>
                                <p>Carefully and Accurately fill up the form</p>                               
                                <ContainerCard>
                                    <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                    <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                    <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                                </ContainerCard>                              
                            </div>
                            <div className="col-4">
                                <h3>Step 4 - Choose Payment Method</h3>
                                <ContainerCard>
                                    <p>Payment through Bank Deposit or Paypal is recomended.</p>
                                    <span className="image fit"><Img fluid={props.data.image06.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-4">
                                <h3>Step 5 - Checkout</h3>                                
                                <ContainerCard>
                                    <p>Fill up the billing information then click next.</p>
                                    <span className="image fit"><Img fluid={props.data.image07.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-4">
                                <h3>Step 6 - For Bank Deposit Payment</h3>
                                <p>Choose Your Bank</p>                             
                                <ContainerCard>
                                    <p></p>
                                    <span className="image fit"><Img fluid={props.data.image08.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>

                            <div className="col-4">
                                <h3>Step 7 - Send Proof of Verification</h3>
                                <p>If the Deposit has been made you may send the proof to this link.</p>
                                <ContainerCard>
                                    <p>Note: Same link is received on new member's email allowing to proceed (if deposit is not done yet).</p>
                                    <span className="image fit"><Img fluid={props.data.image09.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-4">
                                <h3>Step 8 - Confirm Your Deposit</h3>                                
                                <ContainerCard>
                                    <span className="image fit"><Img fluid={props.data.image10.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                            <div className="col-4">
                                <h3>Step 9 - Success</h3>                   
                                <p>Congratulations</p>             
                                <ContainerCard>
                                    <p></p>
                                    <span className="image fit"><Img fluid={props.data.image11.childImageSharp.fluid} /></span>
                                </ContainerCard>                                               
                            </div>
                        </div>                                                                       
                    </Container>
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
    image01: file(relativePath: { eq: "Registercountry.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "Registeragent.png" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "signup-01.png" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "signup-02.png" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "signup-03.png" }) {
        ...fluidImage
    }
    image06: file(relativePath: { eq: "paymentoption.png" }) {
        ...fluidImage
    }
    image07: file(relativePath: { eq: "checkout.png" }) {
        ...fluidImage
    }
    image08: file(relativePath: { eq: "choosebank.png" }) {
        ...fluidImage
    }
    image09: file(relativePath: { eq: "sendproof.png" }) {
        ...fluidImage
    }
    image10: file(relativePath: { eq: "confirmdeposit.png" }) {
        ...fluidImage
    }
    image11: file(relativePath: { eq: "success.png" }) {
        ...fluidImage
    }
  }
  `