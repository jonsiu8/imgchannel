import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'
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
    h3{
        color:black;
        margin: 1em 0 1em 0;
        line-height: 1.12em;
    }
    h4{
        color:black;
        margin:0 0 1em 0;
        line-height: 1.2em;
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
    margin: 0;
    color:black;
    font-size: 21px;
    li {
        line-height: 1.2em;
        margin: 0 0 .5em 0;
    }
    @media (max-width: 768px) {
        font-size: 18px;
  }
  `

  const SpanIcon = styled.span`
    color: #3277B3;
    font-size: 1.1em;
`
const Career = (props) => (
    <Layout>
        <Helmet>
            <title>Career & Business</title>
            <meta name="description" content="Career and Business - IMG Channel"/>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Career and Business</h1>
                    </header>                    
                    <Container>
                    <div className="grid-wrapper">    
                        <div className="col-4">    
                            <ContainerCard>                
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                            <Link to="/financialeducator" className="button small">Learn more</Link>   
                            </ContainerCard>
                        </div>          
                        <div className="col-8">
                            <h2>Financial Educator Career</h2>                        
                            <h4>Join our growing team of financial educators and be part of a great campaign.</h4>
                            <div className="grid-wrapper">
                                <div className="col-12">
                                    <Ulist>
                                        <li><SpanIcon className="icon fa-arrow-right"/> Do you have an entrpreneur mindset?</li> 
                                        <li><SpanIcon className="icon fa-arrow-right"/> Do you believe that knowledge is power?</li> 
                                        <li><SpanIcon className="icon fa-arrow-right"/> Do you believe in people?</li> 
                                        <li><SpanIcon className="icon fa-arrow-right"/> Will you be happy helping people?</li> 
                                        <h3>This could be the freelance career for you.</h3>
                                    </Ulist>
                                </div>
                                {/* <div className="col-6">
                                    <Ulist>
                                        <p><b>Responsibilities</b></p>
                                        <li className="icon fa-check-square-o"> Attend workshops & training</li> 
                                        <li className="icon fa-check-square-o"> Campaign for financial literacy</li> 
                                        <li className="icon fa-check-square-o"> Join webinars & meetings</li> 
                                        <li className="icon fa-check-square-o"> Have your financial checkup</li> 
                                        <li className="icon fa-check-square-o"> Work with the team</li>
                                        <li className="icon fa-check-square-o"> Enjoy!</li>   
                                    </Ulist>                       
                                </div> */}
                            </div>                              
                        </div>
                    </div>
                    </Container>                  
                </div>
            </section>
        </div>
    </Layout>
)
export default Career

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
    image01: file(relativePath: { eq: "careerperson.png" }) {
      ...fluidImage
    }
  }
  `