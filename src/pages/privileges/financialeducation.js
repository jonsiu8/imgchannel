import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import ssbyfbook from '../../assets/images/ssbyfbook.jpg'
import rx from '../../assets/images/rx.jpg'
import previewpic from '../../assets/images/ogimage-fe.png'


const WrapperDiv = styled.div`
    position: relative;
    padding-bottom: 100%;
    padding-top: 0px;
    height: 0;
`

const WrapperIframe = styled.iframe`
    position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
`



const Container = styled.div`  
    background-color:white;  
    h2{
        color:black;
        line-height: 1.1em;
    }   
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
    h3{
        color:white;
        line-height: 1.1em;
    }
    color: white;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 0rem auto;
    
    p {
        line-height: 1.25em;
        margin: 0 0 1em 0;
    }
  `

  const Ulist = styled.ul`  
  list-style-type: none;
  color:black;
  li {
      margin: 0 0 .7em 0;
      line-height: 1.2em;
  }
`

const SpanIcon = styled.span`
  color: #058340;
  font-size: 1.3em;
`


const Financialeducation = (props) => (
    <Layout>
        <Helmet>
            <title>Financial Education</title>
            <meta name="description" content="Financial Education - IMG Channel" />
            <meta property="og:title" content="Financial Education"/>
            <meta property="og:description" content="Webinars, Workshops, e-books + more"/>
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="800" />
            <meta property="og:image:height" content="420" />
            <meta property="og:image:alt" content="screenshot" />
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
                                <Ulist>                                
                                    <li><SpanIcon className="icon fa-check-square-o"/> Increasing Cash Flow</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Managing Debts</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Saving for Emergencies</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Protecting your Family</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Investing for your Future</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> Building a Business</li>
                                </Ulist>
                            </div>
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get your FREE e-book!</h3>
                                <span className="image left"><img src={ssbyfbook} alt="" /></span>
                                <h3>Get the first 2 chapters of "The Secret to Saving and Building Your Future" book.</h3>
                                <p>Become your own financial educator.</p>
                                <p>"Financial Education is  not just for the wealthy - it's for everyone."</p>
                                <p>"This book will upgrade your financial life." -Bro. Bo Sanchez</p>
                                <div>
                                    <form name="ssbyfbook" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/signedup"> 
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
                                <Ulist>                                
                                    <li><SpanIcon className="icon fa-check-square-o"/> Evaluate your financial situation</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Analyze the strengths and weaknesses</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Create a simple and clear plan</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Execute and sustain</li> 
                                </Ulist>
                            </div>             
                            <div className="col-6">     
                                {/* <WrapperDiv>
                                <WrapperIframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-QoWgiOfD1rDEs81OTgZAvJZBKIXR7wFiCDAyKFuD0V1H5Q/viewform?embedded=true" 
                                width="400" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading…</WrapperIframe>
                                </WrapperDiv>*/}


                            <ContainerCard>
                                <h3>FREE Financial Checkup</h3>
                                <div>
                                    <span className="image left"><img src={rx} alt="" /></span>
                                    <p>Learn ways to improve your current financial plan.</p>
                                </div>  
                                <div>
                                <p>Join our Free Financial Checkup Webinar from your mobile devices.  Sign up and get your invite and link. </p>
                                </div>
                                    <form name="financialcheckup" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/signedup"> 
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

                    {/*
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
                                    <form name="AFPprogram" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou"> 
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
                    */}
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