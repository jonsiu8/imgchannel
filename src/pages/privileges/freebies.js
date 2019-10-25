import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'

const ContainerCard = styled.div`  
    background-color:white;  
    h3{color:black};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 20px;
    margin: 10px;   
    `

const Freebies = (props) => (
    <Layout>
        <Helmet>
            <title>Freebies and Discounts</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Freebies and Discounts</h1>
                    </header>
                    
                    <h2>Freebies</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Free doctor's consultation</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>
                                </ContainerCard>
                            </div>

                            <div className="col-4">
                            <ContainerCard>
                                <h3>Free frames</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Digital marketing tools</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                        </div>
                    
                    <hr className="major" />
                
                    <h2>Discounts</h2>
                    <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Non-life insurance</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Auto program</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button special small">Get a quote</Link>
                            </ContainerCard>
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Course fees</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button special small">Get a quote</Link>
                            </ContainerCard>
                            </div>
                        </div>
                  
                </div>
            </section>
        </div>
    </Layout>
)
export default Freebies