import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"

import pic09 from '../assets/images/pic09.jpg'
import education from '../assets/images/education.jpg'

const Container = styled.div`  
    background-color: white;  
    h3{color:black};    
    color: black;

    .button{
        background-color:#221D71;
        color:white;     
    }

    hr.line1 {
        border-top: 1px solid black;
    }     
    
    padding: 25px;
    margin: 3rem auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `



const Affiliates = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>Affiliates</h1>
                    </header>

                    <h2 id="content">Membership Benefits</h2>                    
                    <p>Enjoy exclusive discounts, freebies, and access to our partners that help our members save and maximize their money.</p>
                        <Container>
                        <div className="grid-wrapper">
 
                        <div className="col-4">
                            <h3>Financial education</h3>
                            <span className="image left"><img src={education} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <Link to="/privileges/financialeducation" className="button special small">Learn more</Link>
                            <hr className="line1"/>
                        </div>
                        
                        <div className="col-4">
                            <h3>Healthcare and Insurance</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <Link to="/privileges/healthcareandinsurance" className="button special small">Learn more</Link>                 
                            <hr className="line1" />
                        </div>
                
                        <div className="col-4">
                            <h3>Investments</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Learn more</a>
                            <hr className="line1" />
                        </div>

                        </div>
                        </Container>

                        <div className="grid-wrapper">
 
                        <div className="col-3">
                            <h3>Exclusive discounts</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>
                        
                        <div className="col-3">
                            <h3>Freebies</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>
                
                        <div className="col-3">
                            <h3>Career and Business</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>

                        <div className="col-3">
                            <h3>Services</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Learn more</a>
                            <hr className="major" />
                        </div>

                        </div>
                </div>
            </section>

            

        </div>
    </Layout>
)

export default Affiliates