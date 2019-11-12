import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{color:#046880};  
    h3{color:#046880};
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
const ContainerCard = styled.div`  
    background-color:white;
    h4{color:#046880};  
    h3{color:#046880};
    h2{color:#046880};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1px;  
    `
    const ContainerForm = styled.div`  
    background-color:#0B258F;
    h4{color:white};  
    h3{color:white};
    h2{color:white};
    color: white;
    .button{
        background-color:#13778F;
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
    padding-left:0px;
    font-size:20px;
    
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
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Senior Care</h1>
                    </header>
                    <h2>Kaiser Healthcare Plan for Seniors from 61-100 years old</h2>
                        <div className="grid-wrapper">    

                            <div className="col-8">
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
                                <p><b>Additional Info:</b><br/>
                                Premiums are inclusive of all applicable taxes.<br/>
                                Premiums may change subject to the result of medical evaluation of applicable form.<br/>
                                Hospitalization & treatment outside the Philippines is not covered</p>
                                {/* <p>For more info & options please visit the Kaiser International Healthgroup page.</p>
                                <a href="https://kaiserhealthgroup.com/#products" target="_blank" 
                                rel="noopener noreferrer" className="button small special">Go to Kaiser site</a> */}
                            </ContainerHealth>
                            </div>

                            <div className="col-4">
                            <ContainerHealth>
                            <div className="table-wrapper">
                            <h3>Rates</h3>
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
                                <p>For more details please visit the Kaiser International page.</p>
                                <a href="https://kaiserhealthgroup.com/#products" target="_blank" 
                                rel="noopener noreferrer" className="button small special">Go to Kaiser site</a>
                            </ContainerHealth>
                            </div>

                            <div className="col-12">
                                <p>Note: <i>Effective rates as of June 15, 2019. The company reserves the exclusive right to change, update and revise prices at any given time.</i></p>
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
  }
  `