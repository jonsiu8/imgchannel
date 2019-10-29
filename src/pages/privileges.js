import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerPrivileges from '../components/BannerPrivileges'
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import pic01 from '../assets/images/privileges01.jpg'
import pic02 from '../assets/images/privileges02.jpg'
import pic03 from '../assets/images/privileges03.jpg'
import pic04 from '../assets/images/privileges04.jpg'
import pic05 from '../assets/images/privileges05.jpg'
import pic06 from '../assets/images/privileges06.jpg'

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
    margin: 2rem auto;
   
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
                                <h3>Financial Education</h3>
                                <span className="image fit"><img src={pic01} alt="" /></span>
                                <p>Workshops, seminars, financial checkups, and more...</p>
                                <Link to="/privileges/financialeducation" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>                            
                                                 
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Healthcare and Insurance</h3>
                                <span className="image fit"><img src={pic02} alt="" /></span>
                                <p>Protect your family while building your wealth.</p>
                                <Link to="/privileges/healthcareandinsurance" className="button special small">Learn more</Link>                 
                            </ContainerCard>
                            </div>      
                                       
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Investments</h3>
                                <span className="image fit"><img src={pic03} alt="" /></span>
                                <p>Invest for your future and let your money work for you.</p>
                                <Link to="/privileges/investments" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>
                        </div>                        

                        <div className="grid-wrapper"> 
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Freebies and Discounts</h3>
                                <span className="image fit"><img src={pic04} alt="" /></span>
                                <p>Enjoy exclusive discounts and free products and services.</p>
                                <Link to="/privileges/freebies" className="button special small">Learn more</Link>
                            </ContainerCard>
                            </div>                            
                                         
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Career and Business</h3>
                                <span className="image fit"><img src={pic05} alt="" /></span>
                                <p>Start your financial educator career and be in the financial industry business. </p>
                                <Link to="/privileges/career" className="button special small">Learn more</Link>
                            </ContainerCard>    
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Services</h3>
                                <span className="image fit"><img src={pic06} alt="" /></span>
                                <p>Avail of these other services provided by our partners.</p>
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