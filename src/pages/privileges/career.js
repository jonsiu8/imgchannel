import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'

const ContainerCard = styled.div`  
    background-color:#3277B3;  
    
    color: white;
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
    h2{color:black}; 
    h3{color:black};    
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
const Career = (props) => (
    <Layout>
        <Helmet>
            <title>Career</title>
            <meta name="description" content="Career and Business" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Career and Business</h1>
                    </header>                    
                    <Container>
                    <div className="grid-wrapper">              
                        <div className="col-8">
                            <h2>Financial Educator Career</h2>                        
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                        </div>

                        <div className="col-4">    
                            <ContainerCard>                
                            <span className="image fit"><img src={pic09} alt="" /></span>  
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adus ornare mi ut an</p>
                            <Link to="/becomeamember" className="button small">become a financial educator</Link>   
                            </ContainerCard>
                        </div>
                    </div>
                    </Container>                  
       
                    <Container>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                                <h3>Learn and earn</h3>
                                <span className="image fit"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <hr className="line1"/>
                            </div>
                            <div className="col-4">    
                                <h3>Recognition</h3>         
                                <span className="image fit"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <hr className="line1"/>
                            </div>
                            <div className="col-4">    
                                <h3>Travel incentives</h3>         
                                <span className="image fit"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <hr className="line1"/>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </div>
    </Layout>
)
export default Career