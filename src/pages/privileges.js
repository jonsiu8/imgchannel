import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerPrivileges from '../components/BannerPrivileges'

import pic09 from '../assets/images/pic09.jpg'
import education from '../assets/images/education.jpg'

const Container = styled.div`  
    background-color:white;  
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
    max-width: 1200px;
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
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
   
  `
const Privileges = (props) => (
    <Layout>
        <Helmet>
            <title>Privileges by IMG Channel</title>
            <meta name="description" content="Privileges Page" />
        </Helmet>

        <BannerPrivileges />
        
        <div id="main" className="alt">
            <section id="one">            
                <div className="inner">                 
                        <div className="grid-wrapper">                         
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Financial education</h3>
                                <span className="image left"><img src={education} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/financialeducation" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>                            
                                                 
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Healthcare and Insurance</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Nunc aucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/healthcareandinsurance" className="button special small">Learn more</Link>                 
                            </ContainerCard>
                            </div>      
                                       
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Investments</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/investments" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                        </div>                        

                        <div className="grid-wrapper"> 
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Freebies and Discounts</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/freebies" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>                            
                                         
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Career and Business</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/career" className="button special small">Learn more</Link>
                            </ContainerCard>    
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Services</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <Link to="/privileges/services" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                        </div>
                       
                </div>
                
            </section>

            

        </div>
        
    </Layout>
)

export default Privileges