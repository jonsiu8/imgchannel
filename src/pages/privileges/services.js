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

        hr.line1 {border-top: 1px solid white;}    
        box-shadow: 5px 5px 5px #1E1E1E;
        padding: 20px;
        margin: 10px;   
    `
const Services = (props) => (
    <Layout>
        <Helmet>
            <title>Services</title>
            <meta name="description" content="Services Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Services</h1>
                    </header>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>AssetPreservation Service</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>                              
                            </ContainerCard>                            
                            </div>

                            <div className="col-4">
                            <ContainerCard>
                                <h3>Exclusive Memorial Services</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button small">Learn more</Link>
                            </ContainerCard>                            
                            </div>

                            <div className="col-4">
                            <ContainerCard>
                                <h3>Other Products & Services</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button small">Learn more</Link>
                            </ContainerCard>
                            </div>
                        </div>                 
                </div>
            </section>
        </div>
    </Layout>
)
export default Services