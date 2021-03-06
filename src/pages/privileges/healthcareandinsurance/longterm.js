import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import pic01 from '../../../assets/images/healthicon.png'
import pic02 from '../../../assets/images/lifeinsicon.png'
import pic03 from '../../../assets/images/investmenticon.png'
import previewpic from '../../../assets/images/ogimage-ltc.jpg'

const PageSubTitle = styled.h2`
    line-height: 1.25em;
`

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{color:#046880};  
    h3{
        color:#046880;
        margin: 0;
    }
    h2{
        color:#046880;
        margin: 0;
    }
    h1{
        color:#046880;
        margin: 0;
    }  
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 30px;
    margin: 3rem auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
    const ContainerForm = styled.div`  
    background-color:#3277B3;
    h4{color:white};  
    h3{color:white};
    h2{color:white};
    color: white;
    input:invalid {
        border: 1px solid red;
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
    margin: 1px;
    p {
        line-height: 1.25em;
        margin: 0 0 1em 0;
    }
    `

//     const Ulist = styled.ul`  
//     list-style-type: none;
//     color:black;
//     font-size: 18px;
//     p{  font-size: 20px;
//         padding-left:30px;
//         margin:0px
//     };
//     b{color:black};

//     @media (max-width: 768px) {
//         font-size: 15px;
//       }
//   `

  const Ulist = styled.ul`  
  list-style-type: none;
  color:black;
  h2 {
    margin: 0;
  }
  li {
      margin: 0 0 .7em 0;
      line-height: 1.2em;
  }
  font-size: 18px;
  p{  
      font-size: 20px;
      padding-left:30px;
      margin:0px;
    }
    b{color:black};

    @media (max-width: 768px) {
         font-size: 15px;
     }
`

const SpanIcon = styled.span`
  color: #01657E;
  font-size: 1.3em;
`
    
const Longterm = (props) => (
    <Layout>
        <Helmet>
            <title>Long Term Care</title>
            <meta name="description" content="Long Term Care - IMG Channel" />
            <meta property="og:title" content="Long Term Care"/>
            <meta property="og:description" content="Health Savings Program with Invesments to cover your retirement years"/>
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="happy elderly" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Long Term Care</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-2">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>
                        <div className="col-6">
                            <PageSubTitle>The ULTIMATE KAISER HEALTH BUILDER brings together 3 great features:</PageSubTitle>  
                        </div>
                    </div>                  
                    <ContainerHealth>
                        <div className="grid-wrapper">              
                            <div className="col-4">              
                                <h3>1. Health Coverage</h3>                                
                                <p><span className="image left"><img src={pic01} alt="" /></span>Covers hospitalization and other medical needs even beyond age 60. 
                                    While most traditional healthcare only covers you while working, 
                                    this takes care of your healthcare needs even after retirement.</p>       
                            </div>
                            <div className="col-4">
                                <h3>2. Life Insurance</h3>
                                <p><span className="image left"><img src={pic02} alt="" /></span>Protects against loss of life.  Gives you peace of mind with a four-way insurance coverage: 
                                    Term Life, Accidental and Dismemberment, Waiver of Installment Due to Death or Total Disabilty. </p>
                            </div>
                            <div className="col-4">
                                <h3>3. Investment</h3>
                                <p><span className="image left"><img src={pic03} alt="" /></span>A portion of your savings are invested in mutual funds and it will be managed by professional fund managers.  
                                    Your money will earn at an average interest of ten percent (10%) per year.</p>
                            </div>
                        </div>
                    </ContainerHealth>

                    <ContainerHealth>
                    <h1>Sample Plan</h1>
                        <div className="grid-wrapper">              
                            <div className="col-8">
                                <h2>Plan: K-100 (22-yrs old)</h2>
                                <div className="grid-wrapper">              
                                    <div className="col-6">
                                        <Ulist> 
                                        <h2>Benefits</h2>                               
                                        <li><SpanIcon className="icon fa-check-square-o"/> Life Insurance for 20 years<p><b>P450,000</b></p></li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Accidental Death<p><b>P450,000</b></p></li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Annual Physical Exam w/ Dental<p><b>Free for 7 years</b></p></li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Annual Hospitalization for 7 years<p><b>P60,000</b></p></li> 
                                        <li><SpanIcon className="icon fa-check-square-o"/> Waiver of Premium Protection<p><b>Full</b></p></li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Maturity amount after 20 years<p><b>P1,166,169</b></p></li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Cash Value at Age 60<p><b>P6,483,802</b></p></li>
                                        <li><SpanIcon className="icon fa-check-square-o"/> Cash Value at Age 65<p><b>P10,442,228</b></p></li>
                                        </Ulist>
                                        {/* <Img fluid={props.data.image01.childImageSharp.fluid}/>*/}
                                    </div>
                                    <div className="col-6">
                                        <Ulist> 
                                        <h2>Premiums</h2>                               
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Annual for 7 years<p><b>P59,321</b></p></li>
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Semi-Annual<p><b>P31,764</b></p></li> 
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Quarterly<p><b>P17,058</b></p></li> 
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Monthly<p><b>P5,882</b></p></li> 
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Total Amount Paid<p><b>P411,750</b></p></li>
                                        </Ulist>
                                        <p>Disclaimer:<br/><i>This computation is based on a 22-year old.</i></p>
                                        {/* <Img fluid={props.data.image01.childImageSharp.fluid}/>*/}
                                    </div>
                                </div>                               
                            </div>

                            <div className="col-4">
                            <ContainerForm>
                                <h3>Ask for a Quotation</h3>
                                <p>Get your free sample computations for your age category.</p>
                                <p>Find the plan that's affordable and suitable for you.</p>                              
                                <div>
                                    <form name="kaiserltc" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="kaiserltc" /> 
                                        <div className="field">
                                            <label htmlFor="name">Name
                                            <input type="text" name="name" id="name" required/>
                                            </label>                                            
                                        </div>
                                        <div className="field">
                                            <label htmlFor="age">Age
                                            <input type="text" name="age" id="age" required/>
                                            </label>                                            
                                        </div>
                                        <div className="field">
                                            <label htmlFor="email">Email
                                            <input type="text" name="email" id="email" required/>
                                            </label>                                            
                                        </div>                                        
                                        <ul className="actions">                                            
                                            <input type="submit" value="Send my Free Quote" className="button small" />                                                                      
                                        </ul>
                                    </form>   
                                </div>        
                                                     
                            </ContainerForm>
                            </div>

                        </div>
                    </ContainerHealth>
                </div>
            </section>
        </div>
    </Layout>
)
export default Longterm

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
    image01: file(relativePath: { eq: "kaiser-banner.png" }) {
      ...fluidImage
    }
  }
  `