import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const PageSubTitle = styled.h1`
    line-height: 1.1em;
`
const PageSubTitle2 = styled.h3`
    line-height: 1.1em;
`

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{
        color:#0B258F;
        line-height: 1.3em;
    } 
    h3{color:#0B258F};
    h2{
        color:#0B258F;
        margin: 0;
    }
    h1{color:#0B258F};  
    color: black;
    b{color:black};
    th{color:black};
    tr{border:solid 1px black};

    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 30px;
    margin: 3rem auto;
    max-width: 1200px;
    display: block;
    `

    const ContainerForm = styled.div`  
    background-color:#0B258F;
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
        background-color:#0B258F;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1px;   
    `

    const Ulist = styled.ul`  
    list-style-type: none;
    color:black;
    font-size: 18px;
    li {
        line-height: 1.2em;
        margin: 0 0 .5em 0;
    }
    p{  font-size: 20px;
        padding-bottom:20px;
        margin:0px
    };
    b{color:black};

    @media (max-width: 768px) {
        font-size: 15px;
      }
  `

  const SpanIcon = styled.span`
    color: #0B258F;
    font-size: 1em;
`
    
const Termlife = (props) => (
    <Layout>
        <Helmet>
            <title>Term Life Insurance</title>
            <meta name="description" content="Term Life - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Term Life Insurance</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-3">
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                        </div>
                        <div className="col-9">
                        <PageSubTitle>M.O.S.T.18 - Multiple Option Super Term</PageSubTitle>
                        <PageSubTitle2>Buy Term and Invest the Difference to maximize your investments</PageSubTitle2>
                        </div>
                    </div> 
                        <div className="grid-wrapper">    
                            <div className="col-8">
                                
                            <ContainerHealth>
                                 <h2>Features and Benefits</h2>
                                <h4>MOST18 is a level term life insurance with PDF (Premium Deposit Fund).</h4>
                                <Ulist>
                                    
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Affordable</b> - Get higher face amount for your money</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Higher fund value</b> - PDF allows higher growth of funds</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Premium flexibility</b> - Settle your contribution on a schedule that fits your lifestyle</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Withdrawal advantage</b> - Withdraw your savings anytime without penalty</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Level coverage risk</b> - Your cash value is added to your coverage</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Emergency fund advantage</b> - Cash value even on the first year</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Investment flexibility</b> - You decide where to invest</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Early maturity</b> - Maturity after 5/10/15/18 years</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Issue age is 5 to 60</b> - Insure your whole family</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Addresses various financial needs</b> - Retirement, education, investment, etc.</li>                                    
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Convertible</b> - Option to convert to a permanent policy</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> <b>Low chance of lapsation</b> - Premiums may be settled from your PDF earnings</li>
                                </Ulist>
                                <h4>Advantages of PDF (Premium Deposit Fund)</h4>
                                <div className="grid-wrapper">              
                                    <div className="col-6">
                                        <Ulist>                              
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Very competitive rate of return</li>
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Partial or full withdrawal can be made anytime</li>
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Maximum total deposit of 100% of the Face Amount, excluding interest earnings</li>
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Payable to the beneficiaries upon death of the insured</li>
                                        </Ulist>
                                    </div>
                                    <div className="col-6">
                                        <Ulist>                               
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> PDF has higher growth and doesn't go negative</li>
                                        <li><SpanIcon className="icon fa-arrow-circle-right"/> Premium that will fall due may be deducted from the PDF, the client will not 
                                                                        need to shell out additional payment (assuming that the PDF amount will suffice)</li> 
                                        </Ulist>
                                    </div>
                                </div>
                            </ContainerHealth>
                            </div>

                            <div className="col-4">
                            <ContainerHealth>
                            <div className="table-wrapper">
                            <h2>Sample Rates</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Age</th>
                                            <th>Insurance Coverage</th>
                                            <th>Annual Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>20</td>
                                            <td>P 1 Million</td>
                                            <td>P 5,380</td>                                 
                                        </tr>
                                        <tr>
                                            <td>25</td>
                                            <td>P 1 Million</td>
                                            <td>P 5,590</td>                                 
                                        </tr>
                                        <tr>
                                            <td>30</td>
                                            <td>P 1 Million</td>
                                            <td>P 5,710</td>                                 
                                        </tr>
                                        <tr>
                                            <td>35</td>
                                            <td>P 1 Million</td>
                                            <td>P 6,800</td>                                 
                                        </tr>
                                        <tr>
                                            <td>40</td>
                                            <td>P 1 Million</td>
                                            <td>P 9,070</td>                                 
                                        </tr>
                                        <tr>
                                            <td>45</td>
                                            <td>P 1 Million</td>
                                            <td>P 12,530</td>                                 
                                        </tr>
                                        <tr>
                                            <td>50</td>
                                            <td>P 1 Million</td>
                                            <td>P 18,180</td>                                 
                                        </tr>
                                        <tr>
                                            <td>55</td>
                                            <td>P 1 Million</td>
                                            <td>P 26,040</td>                                 
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                                <p>Note: <i>The company reserves the exclusive right to change, update and revise prices at any given time.</i></p>
                            </ContainerHealth>
                            </div>

                            <div className="col-6">
                            <ContainerForm>
                                <h3>Ask for a Quotation</h3>                            
                                <div>
                                    <form name="most18" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="most18" /> 
                                        <div className="field half first">
                                            <label htmlFor="name">Name
                                            <input type="text" name="name" id="name" required/>
                                            </label>                                            
                                        </div>
                                        <div className="field half">
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
                </div>
            </section>
        </div>
    </Layout>
)

export default Termlife

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
    image01: file(relativePath: { eq: "kaiser-card.jpg" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "mblife-banner.png" }) {
        ...fluidImage
      }
  }
  `