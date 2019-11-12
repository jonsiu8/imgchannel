import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const ContainerHealth = styled.div`  
    background-color:white;  
    h4{color:#0B258F};  
    h3{color:#0B258F};
    h2{color:#0B258F};
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
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
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
    p{  font-size: 20px;
        padding-bottom:20px;
        margin:0px
    };
    b{color:black};

    @media (max-width: 768px) {
        font-size: 15px;
      }
  `
    
const Grouplife = (props) => (
    <Layout>
        <Helmet>
            <title>Group Life Insurance</title>
            <meta name="description" content="Group Life - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Group Life Insurance</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <ContainerHealth> 
                                <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            </ContainerHealth>
                        </div>
                        
                        <div className="col-8">
                            <ContainerHealth>
                                <h2>100,000 Accident Insurance for all IMG Members</h2>
                            </ContainerHealth>
                        </div>
                        
                    </div> 
            
                </div>
            </section>
        </div>
    </Layout>
)

export default Grouplife

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