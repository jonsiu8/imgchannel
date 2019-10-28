import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'
import ssbyfbook from '../../assets/images/ssbyfbook.jpg'
import webinars from '../../assets/images/financialeduc01.jpg'
import financialcheckup from '../../assets/images/FinancialCheckup.png'
import afp from '../../assets/images/AFP.png'

const Container = styled.div`  
    background-color:white;  
    h2{color:black};    
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
    margin: 1px;   
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
                                <a href="#" className="button special small">Sign up</a>
                                <hr className="line1" />
                            </div>     
                                    
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get your FREE e-book!</h3>
                                <span className="image left"><img src={ssbyfbook} alt="" /></span>
                                <p>Start your journey now. <br/><br/>
                                Get the first 2 chapters of "The Secret to Saving and Building Your Future". <br/><br/>
                                <em>"This book will upgrade your financial life."</em><br/>
                                -Bro. Bo Sanchez
                                </p>
                                <a href="#" className="button special small">Send my copy</a>
                      
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Financial checkup</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><img src={financialcheckup} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
            
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Free financial checkup</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <a href="#" className="button special small">Sign up</a>
                       
                            </ContainerCard>
                            </div>
                        </div>
                    </Container>

                    <Container>
                    <h2>Associate financial planner program</h2>
                        <div className="grid-wrapper"> 
                            <div className="col-6">                            
                                <span className="image fit"><img src={afp} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                    
                            </div>             
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Get certified</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                
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