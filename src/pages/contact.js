import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import fbmessenger from '../assets/images/messageus.png'

const StyledImg = styled(Img)`
  border-radius: 15px;
`

const Container = styled.div`  
    background-color:#3277B3;  
    h2{color:black};    
    color: black; 
    border-style: solid;
    border-width: 1px;
    border-color: black;

    input:invalid {
        border: 1.5px solid red;
      }
      
      input:valid {
        border: 1.5px solid green;
      }

      textarea:invalid {
        border: 1.5px solid red;
      }
      
      textarea:valid {
        border: 1.5px solid green;
      }

    .button{
        background-color:#3277B3;
        color:white;     
    }
  
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 2rem auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const AStyled = styled.a`
    :link {color: #3277B3;}    
    :visited {color: #3277B3;}    
    :hover {color: #3277B3;}    
    :active {color: #3277B3;}
  `

  const Styledimg = styled.img`
    margin: 0;
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



const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contact - IMG Channel</title>
            <meta name="description" content="Contact Page" />
        </Helmet>

        <section id="banner" className="style2">
          <div className="inner">
              <header className="major">
                  <h1>Contact</h1>
              </header>
              <div className="content">
                  <p>For More Information and Inquiries</p>
              </div>
          </div>
        </section>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">              
                    <h2 id="elements">We are here to assist you</h2>
                    <span>
                      <AStyled href="https://m.me/imgch/" target="_blank" rel="noopener noreferrer">
                      <Styledimg src={fbmessenger} alt="message" /></AStyled>     
                    </span>
                                  
       
                    <div className="grid-wrapper">  
                                 
                        <div className="col-6"> 
                        <Container>                                                      
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou"> 
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="contact" /> 

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

                                <div className="field">
                                    <label htmlFor="location">Location
                                    <input type="text" name="location" id="location" required/>
                                    </label>
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message
                                    <textarea name="message" id="message" rows="4" required/>
                                    </label>
                                </div>

                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send Message" className="button small" />
                                    </li>
                                    <li>
                                        <input type="reset" value="Clear" className="button small"/>
                                    </li>                                                                              
                                </ul>                                
                            </form>                             
                            </Container>            
                        </div>
                        <div className="col-6">                    
                          <StyledImg fluid={props.data.image01.childImageSharp.fluid} />              
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Contact

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
    image01: file(relativePath: { eq: "contactnew.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "messengericon.png" }) {
      ...fluidImage
    }
  }
  `