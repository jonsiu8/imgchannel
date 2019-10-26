import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import BannerContact from '../components/BannerContact'
import pic03 from '../assets/images/pic03.jpg'

const Container = styled.div`  
    background-color:#0B258F;  
    h2{color:black};    
    color: black; 

    input:invalid {
        border: 2px solid red;
      }
      
      input:valid {
        border: 2px solid green;
      }

      textarea:invalid {
        border: 2px solid red;
      }
      
      input:valid {
        border: 2px solid green;
      }

    .button{
        background-color:#3277B3;
        color:white;     
    }
  
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
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

        <BannerContact/>

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
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" required/>
                                </div>

                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" required/>
                                </div>

                                <div className="field">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" name="location" id="location" required/>
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="6" required/>
                                </div>

                                <ul className="actions">
                                    <li>
                                        <input type="submit" value="Send Message" className="special" />
                                    </li>
                                    <li>
                                        <input type="reset" value="Clear" />
                                    </li>
                                </ul>
                            </form>   
                            </Container>            
                        </div>
                      
                    </div>
                   
                </div>
            </section>
        </div>
    </Layout>
)

export default Contact