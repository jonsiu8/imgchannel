import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'
import webinars from '../../assets/images/webinars.png'
import financialcheckup from '../../assets/images/FinancialCheckup.png'
import afp from '../../assets/images/AFP.png'

const ContainerHealth = styled.div`  
    background-color:#13778F;  
    h2{color:white};    
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid white;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 5px;
    margin: 0px;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
  const ContainerLife = styled.div`  
    background-color:#181E55;  
    h2{color:white};    
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 5px;
    margin-top: 25px;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const ContainerCard = styled.div`  
    background-color:white;  
    h3{color:black};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    
    padding: 20px;
    margin: 0px;   
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
                    <ContainerHealth>
                    <h2>Healthcare plans</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Long-term care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link> 
                                <hr className="line1"/>                               
                            </ContainerCard>
                            
                            </div>

                            <div className="col-4">
                            <ContainerCard>
                                <h3>Short-term care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                                <hr className="line1"/>
                            </ContainerCard>
                            
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Senior care</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                                <hr className="line1"/>
                            </ContainerCard>
                            </div>
                        </div>
                    </ContainerHealth>

                    <ContainerLife>
                    <h2>Life Insurance</h2>
                    <div className="grid-wrapper">              
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Term life insurance</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button special small">Learn more</Link>
                                <hr className="line1"/>
                            </ContainerCard>
                            </div>
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Group life insurance</h3>
                                <span className="image right"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button special small">Get a quote</Link>
                                <hr className="line1"/>
                            </ContainerCard>
                            </div>
                        </div>
                    </ContainerLife>
                </div>
            </section>
        </div>
    </Layout>
)
export default Healthcareandinsurance