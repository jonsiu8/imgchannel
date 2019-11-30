import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import previewpic from '../../../assets/images/ogimage-shortterm.jpg'

const PageSubTitle = styled.h2`
    line-height: 1.25em;
`

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{color:#046880;}  
    h3{
        color:#046880;
        line-height: 1.25em;
    }
    h2{color:#046880;}
    h1{color:#046880;}  
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
        line-height: 1.25em;
        margin: 0.7em 0 0.6em 0;
    }

    th,tr {
        line-height: 1.2em;
        margin: 5px;
    }
    `
    const Ulist = styled.ul`  
    list-style-type: none;
    color:black;
    padding:0px;
    font-size:19px;
    margin 0;
    li {
        line-height:1.55em;
    }
    
    p{  font-size: 22px;
        padding-left:0px;
        margin:0px
        line-height: 0;
    }
    b{color:black};

    @media (max-width: 768px) {
        font-size: 16px;
        p{  font-size: 18px;
            padding-left:0px;
            margin:0px
      }
  `

  const SpanIcon = styled.span`
    color: #058340;
    font-size: 1.3em;
`
    
const Shortterm = (props) => (
    <Layout>
        <Helmet>
            <title>Short Term Care</title>
            <meta name="description" content="Short Term Care - IMG Channel" />
            <meta property="og:title" content="Short Term Care"/>
            <meta property="og:description" content="Healthcare coverage for you and your family during your working years"/>
            <meta property="og:image:type" content="image/jpg" />
            <meta property="og:image" content={previewpic} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="medical professionals" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">                    
                        <h1>Short Term Care</h1>                        
                    </header>  
                    <div className="grid-wrapper">              
                        <div className="col-2">
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                        </div>
                        <div className="col-3">
                            <PageSubTitle>The Kaiser HealthCard</PageSubTitle>  
                        </div>
                    </div>               
                        <div className="grid-wrapper">
                            <div className="col-4">
                            <ContainerHealth>
                                <Ulist>
                                    <h3>Our Five-Point HealthCard Program</h3>
                                    <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>                                    
                                    <li><SpanIcon className="icon fa-check-square-o"/> Preventive Health Care</li>
                                    <li><SpanIcon className="icon fa-check-square-o"/> In-Patient Care</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Out-Patient Care</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Dental Care</li> 
                                    <li><SpanIcon className="icon fa-check-square-o"/> Emergency Care</li>
                                </Ulist>
                                <p>For more info & options please visit the Kaiser International Healthgroup page.</p>
                                <a href="https://kaiserhealthgroup.com/products/short-term.php" target="_blank" 
                                rel="noopener noreferrer" className="button small special">Go to Kaiser site</a>
                            </ContainerHealth>
                            </div>

                            <div className="col-4">
                            <ContainerHealth>
                            <div>
                            <h3>Individual Rates (Excludes *Major Hospitals)</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Benefits</th>
                                            <th>Plan</th>
                                            <th>Annual</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>50,000</td>
                                            <td>Ward up to H-500</td>
                                            <td>11,108</td>
                                        </tr>
                                        <tr>
                                            <td>60,000</td>
                                            <td>Semi-private up to H-800</td>
                                            <td>12,279</td>
                                        </tr>
                                        <tr>
                                            <td>70,000</td>
                                            <td>Small private up to H-1200</td>
                                            <td>14,810</td>
                                        </tr>
                                        <tr>
                                            <td>80,000</td>
                                            <td>Large private up to H-1900</td>
                                            <td>22,411</td>
                                        </tr>
                                        <tr>
                                            <td>90,000</td>
                                            <td>Small SUITE up to H-2600</td>
                                            <td>26,502</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </ContainerHealth>
                            </div>

                            <div className="col-4">
                            <ContainerHealth>
                            <div className="table-wrapper">
                            <h3>Individual Rates (Includes *Major Hospitals)</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Benefits</th>
                                            <th>Plan</th>
                                            <th>Annual</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>70,000</td>
                                            <td>Ward up to H-1600</td>
                                            <td>20,073</td>
                                        </tr>
                                        <tr>
                                            <td>100,000</td>
                                            <td>Semi-private up to H-2800</td>
                                            <td>27,672</td>
                                        </tr>
                                        <tr>
                                            <td>110,000</td>
                                            <td>Small private up to H-3200</td>
                                            <td>35,077</td>
                                        </tr>
                                        <tr>
                                            <td>150,000</td>
                                            <td>Large private up to H-4200</td>
                                            <td>49,499</td>
                                        </tr>
                                        <tr>
                                            <td>200,000</td>
                                            <td>Small SUITE up to H-4200</td>
                                            <td>65,999</td>
                                        </tr>
                                    </tbody>
                                </table>
                                </div>
                            </ContainerHealth>
                            </div>
                            <div className="col-12">
                                <p><b>*Major Hospitals:</b> Makati Medical Center, Saint Luke Medical Center, The Medical City, 
                                    Cardinal Santos Medical Center and Asian Hospital Medical Center</p>
                                <p>Family and Group plans are also available, go to Kaiser site for more info.</p>
                                <p>Note: <i>Effective rates as of June 15, 2019. The company reserves the exclusive right to change, update and revise prices at any given time.</i></p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Shortterm

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