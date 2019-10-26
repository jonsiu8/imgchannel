import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'

    const ContainerCardHealth = styled.div`  
        background-color:white;  
        h3{color:#046880};
        color: black;

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 20px;
        margin: 10px;   
    `
    const ContainerCardLife = styled.div`  
        background-color:white;  
        h3{color:#1A237E};
        color: black;

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 20px;
        margin: 10px;   
    `


const Healthcareandinsurance = (props) => (
    <Layout>
        <Helmet>
            <title>Healthcare and Insurance</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Healthcare and Insurance</h1>
                    </header>
                    
                    <h2>Healthcare plans</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Long-term care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button small">Learn more</Link>                              
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Short-term care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button small">Learn more</Link>
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Senior care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button small">Learn more</Link>
                            </ContainerCardHealth>
                            </div>
                        </div>
                  
                    <hr className="major" />
                
                    <h2>Life Insurance</h2>
                    <div className="grid-wrapper">              
                            <div className="col-6">
                            <ContainerCardLife>
                                <h3>Term life insurance</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button small">Learn more</Link>
                            </ContainerCardLife>
                            </div>
                            <div className="col-6">
                            <ContainerCardLife>
                                <h3>Group life insurance</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button small">Get a quote</Link>
                            </ContainerCardLife>
                            </div>
                        </div>
                 
                </div>
            </section>
        </div>
    </Layout>
)
export default Healthcareandinsurance