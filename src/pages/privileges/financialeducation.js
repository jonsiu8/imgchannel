import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'
import ssbyfbook from '../../assets/images/ssbyfbook.jpg'
import webinars from '../../assets/images/financialeduc01.jpg'
import financialcheckup from '../../assets/images/financialeduc02.jpg'
import rx from '../../assets/images/rx.jpg'
import afp from '../../assets/images/AFP.png'

const Container = styled.div`  
    background-color:white;  
    h2{color:black};    
    h5{color:black};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 2rem auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

const ContainerCard = styled.div`  
    background-color:#DCE1E5;  
    h3{color:black};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1rem auto;   
  `


const Financialeducation = (props) => (
    <Layout>
        <Helmet>
            <title>Financial education</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Financial Education</h1>
                    </header>
                    <Container>
                    <h2>Webinars, Workshops, e-books + more</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><img src={webinars} alt="" /></span>
                                <p>Qualified trainers and speakers conduct webinars, workshops, training, and seminars around the globe.  Online tools including books are also provided.</p>
                            </div>     
                                    
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get your FREE e-book!</h3>
                                <span className="image left"><img src={ssbyfbook} alt="" /></span>
                                <p>Get the first 2 chapters of "The Secret to Saving and Building Your Future". <br/><br/>
                                <em>"This book will upgrade your financial life."</em><br/>
                                -Bro. Bo Sanchez
                                </p>
                                <div>
                                    <form name="ssbyfbook" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="ssbyfbook" /> 
                                        <div className="field">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" required/>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" required/>
                                        </div>
                                        <ul className="actions">
                                            <li>
                                                <input type="submit" value="Send my copy" className="special" />
                                            </li>                            
                                        </ul>
                                    </form>   
                                </div>
                      
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Financial checkup</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><img src={financialcheckup} alt="" /></span>
                                <p>Know where you are and where you're heading.</p>
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Have your FREE financial checkup</h3>
                                <span className="image left"><img src={rx} alt="" /></span>
                                <p>Learn ways to improve your current financial plan.</p>
                                <div>
                                    <form name="financialcheckup" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thank-you"> 
                                        <input type="hidden" name="bot-field" />
                                        <input type="hidden" name="form-name" value="financialcheckup" /> 
                                        <div className="field">
                                            {/*<label for="name">Name</label>*/}
                                            <h5>Name</h5>
                                            <input type="text" name="name" id="name" placeholder="Your name" required/>
                                        </div>
                                        <div className="field">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" required/>
                                        </div>
                                        <ul className="actions">
                                            <li>
                                                <input type="submit" value="Sign Up" className="special" />
                                            </li>                            
                                        </ul>
                                    </form>   
                                </div>
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Associate financial planner program</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><img src={afp} alt="" /></span>
                                <p>Nunc lacinia ante nunc acn varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get certified</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac locinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                
                                <Link to="/becomeamember" className="button special small">become an img member now</Link>   
                    
                                </ContainerCard>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            

        </div>
    </Layout>
)

export default Financialeducation