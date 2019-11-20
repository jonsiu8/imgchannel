import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

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
       
                    <div className="grid-wrapper">  
                                 
                        <div className="col-6"> 
                        <Container>                                                      
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
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
                                    <textarea name="message" id="message" rows="2" required/>
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
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>                      
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
    image01: file(relativePath: { eq: "contact.jpg" }) {
      ...fluidImage
    }
  }
  `