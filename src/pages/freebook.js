import React from 'react'
import { graphql } from 'gatsby'
import styled from "styled-components"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Img from 'gatsby-image'

import profilepic from '../assets/images/bosanchezprofile.jpg'
import previewpic from '../assets/images/ogimage-freebook.png'
import fbmessenger from '../assets/images/messageus.png'

const StyledImg = styled(Img)`
  display: block;
  margin: auto;
  padding: 0;
  max-width: 245px;
  @media (max-width: 768px) {
    max-width: 180px;
}
`

const ImgProfile = styled.img`
  display: block;
  margin: auto;
  padding: 0;
  max-width: 150px;
  border-radius: 100%;
  @media (max-width: 768px) {
    max-width: 120px;
}
`
const ContainerForm = styled.div`
    max-width: 600px;
    border-style: solid;
    border-width: 5px;
    border-radius: 20px;
    border-color: #3277B3;
    background-color:#3277B3;
    margin: 1em 0 0 0;
    padding: 0;
    h2 {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .2em 0;
        font-size: 1.8em;
    }
    p {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .7em 0;
        font-size: 1.1em;
    }
`

const AStyled = styled.a`
:link {color: #3277B3;}    
:visited {color: #3277B3;}    
:hover {color: #3277B3;}    
:active {color: #3277B3;}
float: right;
`

const Styledimg = styled.img`
margin: 1.7em 0 0 0;
padding: 1px;
border: none;
border-radius: 5px;
box-shadow: 1px 1px 1px #070F29;
max-width: 143px;

:hover {
  opacity: 0.9;
  box-shadow: 0 0 3px 2px #070F29;
}

@media (max-width: 768px) {
    max-width: 132px;
}
`

const FreeBook = (props) => {
    
    return (
        <Layout>
            <Helmet>
                <title>Free eBook</title>
                <meta name="description" content="Free eBook" />
                <meta property="og:title" content="Free eBook"/>
                <meta property="og:description" content="Financial education is not just for the wealthy, it's for everyone."/>
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image" content={previewpic} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="lapton on desk" />
            </Helmet>
            <div id="main" className="alt">
                <div className="inner">
                    <div className="grid-wrapper">              
                        <div className="col-3">
                            <StyledImg fluid={props.data.image01.childImageSharp.fluid} />
                        
                      <AStyled href="https://m.me/imgch/" target="_blank" rel="noopener noreferrer">
                      <Styledimg src={fbmessenger} alt="message" /></AStyled>  
                      <div style={{clear: "right"}}/>   
                
                        </div>
                        <div className="col-9">
                            <ContainerForm>                
                            <h2>Get your FREE copy now!</h2>
                            <p><b>The Secret to Saving and Building Your Future book</b></p>
                            <p>Be confident in your financial decisions and become your own financial educator.</p>
                            <p>Subscribe to our newsletter and get your <b><i>partial PDF copy</i></b> straight to your inbox.</p>
                                <form name="bookpage-ssbyf" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/subscribed"> 
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="form-name" value="bookpage-ssbyf" /> 
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
                                    <div className="6u 12u(small)">
                                        <input type="checkbox" id="amember" name="amember" />
                                        <label htmlFor="amember">already an IMG member</label>
                                    </div>  
                                    <ul className="actions">                                            
                                        <input type="submit" value="Subscribe" className="button" />                                                                      
                                    </ul>
                                </form>   
                            </ContainerForm> 
                            <hr className="major"/>
                        </div>
                        
                        <div className="col-9">
                            <h3>A Foreword from Bo Sanchez</h3>
                            <p><span className="image right"><ImgProfile src={profilepic} alt="" /></span><i>"Friend, this book is your ticket to upgrading your
                                financial life.<br/>
                                Read it, devour it, and share it with people
                                who need a financial revolution in their life."</i></p>
                            <p><i>May your dreams come true,<br/> 
                                - Bo Sanchez</i></p>
                        </div>
                    </div>
                </div>
            </div>                
        </Layout>
    )
}

export default FreeBook

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
    image01: file(relativePath: { eq: "ssbyfbookpic.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "bosanchezprofile.png" }) {
        ...fluidImage
      }
  }
  `