import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../../../assets/images/ogimage-seniorcare.jpg'

const PageSubTitle = styled.h2`
    line-height: 1.25em;
`

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{color:#046880};  
    h3{
        color:#046880;
        margin: 0 0 .4em 0;
    }
    h2{color:#046880};
    h1{color:#046880};  
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
    p{
        line-height: 1.4em;
        margin: 0 0 .8em 0;
    }
    `
    const Ulist = styled.ul`  
    list-style-type: none;
    color:black;
    padding-left:0px;
    font-size:20px;
    h3 {margin: 0 0 .4em 0;}

    li {
        margin: 0 0 .9em 0;
        line-height: 1.4em;
    }
    
    p{  font-size: 22px;
        padding-left:0px;
        margin:0px
    };
    b{color:black};

    @media (max-width: 768px) {
        font-size: 16px;
        p{  font-size: 18px;
            padding-left:0px;
            margin:0px
      }
  `
    
const Seniorcare = (props) => (
    <Layout>
        <Helmet>
            <title>Senior Care</title>
            <meta name="description" content="Senior Care - IMG Channel" />
            <meta property="og:title" content="Senior Care"/>
            <meta property="og:description" content="Healthcare coverage for seniors from 61-100 years of age"/>
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="elderly care" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Senior Care</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-2">
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                        </div>
                        <div className="col-5">
                        <PageSubTitle>Kaiser Healthcare Plan for Seniors from 61-100 years old</PageSubTitle>  
                        </div>
                    </div> 
                        <div className="grid-wrapper">    

                            <div className="col-7">
                            <ContainerHealth>
                                <Ulist>
                                    <h3>Features and Benefits</h3>
                                    {/*<span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>*/}
                                    <li className="icon fa-check-square-o"> Medical healthcare plan especially designed for those ages 61 years of age and up.</li>
                                    <li className="icon fa-check-square-o"> Reimbursement of actual hospitalization expenses based on coverage. Reimbursement may be done
                                                                            midway of hospitalization provided confinement is coverable and required documents submitted.</li> 
                                    <li className="icon fa-check-square-o"> Patient’s choice for doctor, hospital and specialist.</li> 
                                    <li className="icon fa-check-square-o"> Comprehensive range of Medical Healthcare Benefits with a maximum coverage limit of up to
                                                                            Php1,000,000.00</li> 
                                    <li className="icon fa-check-square-o"> Member to shoulder the 1st P10,000.00 from the total bill plus an additional 10% of the claimable
                                                                            amount. The remaining 90% of the claimable amount shall be shouldered by Kaiser.</li>
                                    <li className="icon fa-check-square-o"> Surgical Cases are based on PhilHealth RUVs to calculate the maximum amount payable to the
                                                                            surgeon for the surgical procedure. This means that the payment received from Kaiser may be less
                                                                            than the professional fee charged by the surgeon.</li>
                                    <li className="icon fa-check-square-o"> Coverage is one (1) year upon effectivity of the plan.</li>
                                    <li className="icon fa-check-square-o"> Renewal is guaranteed up to age 100. However, KAISER reserves the right to adjust premiums and
                                                                            other policy conditions upon written advice of 45 days prior to renewal.</li>
                                </Ulist>
                                <p><b>Additional Info:</b></p>
                                <p>Premiums are inclusive of all applicable taxes.</p>
                                <p>Premiums may change subject to the result of medical evaluation of applicable form.</p>
                                <p>Hospitalization & treatment outside the Philippines is not covered.</p>
                            </ContainerHealth>
                            </div>

                            <div className="col-5">
                            <ContainerHealth>
                            <div className="table-wrapper">
                            <h3>Rates*</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Age</th>
                                            <th>Plan 250K</th>
                                            <th>Plan 500K</th>
                                            <th>Plan 1M</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>61-70</td>
                                            <td>25,300</td>
                                            <td>39,600</td>
                                            <td>68,200</td>
                                        </tr>
                                        <tr>
                                            <td>71-75</td>
                                            <td>30,800</td>
                                            <td>47,300</td>
                                            <td>80,300</td>
                                        </tr>
                                        <tr>
                                            <td>76-80</td>
                                            <td>42,900</td>
                                            <td>68,200</td>
                                            <td>113,300</td>
                                        </tr>
                                        <tr>
                                            <td>81-85</td>
                                            <td>77,000</td>
                                            <td>123,200</td>
                                            <td>205,700</td>
                                        </tr>
                                        <tr>
                                            <td>86-90</td>
                                            <td>129,800</td>
                                            <td>210,100</td>
                                            <td>352,000</td>
                                        </tr>
                                        <tr>
                                            <td>91-100</td>
                                            <td>162,800</td>
                                            <td>279,400</td>
                                            <td>588,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>The Member/Owner must pay a Co Payment fee equivalent to the first Php 10, 000 AND 10% of the final
                                    hospital bill.</p>
                                </div>
                                {/* <p>For more details please visit the Kaiser International <a href="https://kaiserhealthgroup.com/#products">page</a>.</p> */}
                                <p>For more information please visit the Kaiser International Healthgroup page.</p>
                                <a href="https://kaiserhealthgroup.com/#products" target="_blank" 
                                rel="noopener noreferrer" className="button small special">Go to Kaiser site</a>
                            </ContainerHealth>
                            <p>Note: <i>*Effective rates as of June 15, 2019. The company reserves the exclusive right to change, update and revise prices at any given time.</i></p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Seniorcare

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
    image02: file(relativePath: { eq: "kaiser-banner.png" }) {
        ...fluidImage
      }
  }
  `