import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import ssbyfbook from '../../assets/images/ssbyfbook.jpg'
import rx from '../../assets/images/rx.jpg'


const Container = styled.div`  
    background-color:white;  
    h2{color:black};    
    h5{color:black};
    color: black;

    input:invalid {
        border: 1px double red;
      }
      
      input:valid {
        border: 1px solid green;
      }

      textarea:invalid {
        border: 1px solid red;
      }
      
      textarea:valid {
        border: 1px solid green;
      }

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
   
    justify-content: center;
  `

const ContainerCard = styled.div`  
    background-color:#3277B3;  
    h3{color:white};
    color: white;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 0rem auto;   
  `


const Financialeducation = (props) => (
    <Layout>
        <Helmet>
            <title>Financial Education</title>
            <meta name="description" content="Financial Education - IMG Channel" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">                    
                    <header className="major">
                        <h1>Financial Education</h1>
                    </header>
                    <Container>
                    <h2>Webinars, Workshops, e-books + more</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                                <p>Qualified trainers and speakers conduct webinars, workshops, training, and seminars around the globe.  Online tools including books are also provided.</p>
                            </div>
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get your FREE e-book!</h3>
                                <span className="image left"><img src={ssbyfbook} alt="" /></span>
                                <p>Get the first 2 chapters of "The Secret to Saving and Building Your Future" book when you sign up.<br/><br/>
                                <em>"This book will upgrade your financial life."</em><br/>
                                -Bro. Bo Sanchez
                                </p>
                                <div>
                                    <form name="ssbyfbook" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="ssbyfbook" /> 
                                        <div className="field half first">
                                            <label htmlFor="name">Name
                                            <input type="text" name="name" id="name" required/>
                                            </label>                                            
                                        </div>
                                        <div className="field half">
                                            <label htmlFor="email">Email
                                            <input type="text" name="email" id="email" required/>
                                            </label>                                            
                                        </div>
                                        <ul className="actions">                                            
                                            <input type="submit" value="Sign Up" className="button small" />                                                                      
                                        </ul>
                                    </form>   
                                </div>                      
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Financial Checkup</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                                <p>Know where you are and where you're heading.</p>
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Have your FREE financial checkup</h3>
                                <div>
                                    <span className="image left"><img src={rx} alt="" /></span>
                                    <p>Learn ways to improve your current financial plan.</p>
                                </div>  
                                <div>
                                <p>One-on-one Personal, One-on-one Online, Group Class, Webinar</p>
                                </div>
                                    <form name="financialcheckup" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="financialcheckup"/> 
                                        <div className="field half first">
                                            <label htmlFor="name">Name
                                            <input type="text" name="name" id="name" required/>
                                            </label>
                                        </div>
                                        <div className="field half">
                                            <label htmlFor="email">Email
                                            <input type="text" name="email" id="email" required/>
                                            </label>
                                        </div>
                                        <ul className="actions">                                            
                                            <input type="submit" value="Sign Up" className="button small" />                                                                      
                                        </ul>
                                    </form>
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Associate Financial Planner Program</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                                <p> Our Associate Financial Planner Certification Program allows you have more knowledge and credibility in the financial industry.<br/>
                                    After qualifying all the requirements and exams, you may attach the AFP designation after your name.
                                </p>
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get Certified</h3> 
                                <div>
                                <p>Exclusive Discounted Price for IMG Members <br/><br/>
                                Philippines - the regular price for the certification is Php5,000.<br/>
                                For IMG Members = Php1,500<br/><br/>
                                Abroad - the regular price for the certification is Php16,000.<br/>
                                For IMG Members = Php2,500
                                </p>
                                </div>
                                    <form name="AFPprogram" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="AFPprogram"/> 
                                        <div className="field half first">
                                            <label htmlFor="name">Name
                                            <input type="text" name="name" id="name" required/>
                                            </label>
                                        </div>
                                        <div className="field half">
                                            <label htmlFor="email">Email
                                            <input type="text" name="email" id="email" required/>
                                            </label>
                                        </div>
                                        <ul className="actions">                                            
                                            <input type="submit" value="Sign Up" className="button small" />                                                                      
                                        </ul>
                                    </form>
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>          
        </div>
    </Layout>
)

export default Financialeducation

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
    image01: file(relativePath: { eq: "financialeduc01.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "ssbyfbook.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "financialeduc02.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "rx.jpg" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "financialeduc03.png" }) {
        ...fluidImage
    }
  }
  `