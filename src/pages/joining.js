import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
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
                                <h3>Step 1 - Registration Site</h3>
                                <p>Click the "REGISTER" button and it will open another window to the IMG registration site.</p>                           
                                <ul className="actions">                                
                                    <li><a href="https://img-corp.net/register.php?agentcode=6110hk" 
                                        target="_blank" rel="noopener noreferrer" className="button special next">Register</a>
                                    </li>
                                </ul>
                                <div className="grid-wrapper">              
                                    <div className="col-6">
                                        <ContainerCard>
                                            <p> If you're based in the PHILIPPINES the page will look like this <i className="icon fa-arrow-down"/></p >
                                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                                         </ContainerCard>                                               
                                    </div>
                                    <div className="col-6">
                                        <ContainerCard>
                                            <p> If you're ABROAD it's like this <i className="icon fa-arrow-down"/></p>
                                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                                         </ContainerCard>                                               
                                    </div>
                                </div>                                                      
                            </div>                    
                        </div>
                    </Container>
                    <Container>                         
                    <div className="grid-wrapper">              
                            <div className="col-6">
                                <h3>Step 2 - Sponsor's Name Confirmation</h3>
                                <p>Check the "AGENT" name below.  That should be your Sponsor's name.</p>                               
                                <ContainerCard>
                                    <p>If your SPONSOR is Jon Fredrich Siu, then go ahead to step 4<br/></p>
                                    <p>If it's someone else, skip to Step 3.</p>
                                    <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                </ContainerCard>                              
                            </div>
                            <div className="col-6">
                                <h3>Step 3 - Change Agent's Name</h3>
                                <p>Note: If your Agent Name is correctly displayed, skip to step 4.</p>                        
                                <ContainerCard>
                                    <p>Click "change agent" (located at the bottom).</p>
                                    <p>You will be asked to input your Sponsor's AgentCode then submit.</p>                                    
                                    <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                                </ContainerCard>                              
                            </div>                    
                        </div>
                    </Container>
                    <Container>                         
                    <div className="grid-wrapper">              
                            <div className="col-6">
                                <h3>Step 4 - Sponsor's Name Confirmation</h3>
                                <p>Check the "AGENT" name below.  That should be your Sponsor's name.</p>                               
                                <ContainerCard>
                                    <p>If your SPONSOR is Jon Fredrich Siu, then go ahead to step 4<br/></p>
                                    <p>If it's someone else, skip to Step 3.</p>
                                    <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                </ContainerCard>                              
                            </div>
                            <div className="col-6">
                                <h3>Step 5 - Change Agent's Name</h3>
                                <p>Note: If your Agent Name is correctly displayed, skip to step 4.</p>                        
                                <ContainerCard>
                                    <p>Click "change agent" (located at the bottom).</p>
                                    <p>You will be asked to input your Sponsor's AgentCode then submit.</p>                                    
                                    <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
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
    image01: file(relativePath: { eq: "RegisterIntl.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "RegisterIntl.png" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "Step3.png" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "Step3.png" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "Step3.png" }) {
        ...fluidImage
    }
  }
  `