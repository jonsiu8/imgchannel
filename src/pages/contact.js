import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Contact = (props) => (
    <Layout>
        <Helmet>
            <title>Contacts - IMG Channel</title>
            <meta name="description" content="Contacts Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Contact</h1>
                    </header>
                    <h2 id="elements">We are here to assist you</h2>
                    <div className="grid-wrapper">    
                        <div className="col-6">                           
                            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"> 
                                <input type="hidden" name="bot-field" />
                                <input type="hidden" name="form-name" value="contact" /> 

                                <div className="field half first">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>

                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" id="email" />
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="6" />
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Contact