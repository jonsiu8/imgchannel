import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import pic09 from '../../assets/images/pic09.jpg'

const ContainerCard = styled.div`  
    background-color:white;  
    h3{color:#046880};
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }

    hr.line1 {border-top: 1px solid white;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 1rem auto;  
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
                            <h3>FREE Doctor's Consultation</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>                              
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>FREE Eyeglasses Frames</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Online Marketing Tools</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>
                        </ContainerCard>
                        </div>
                    </div>
                    
                    <hr className="major" />
                
                    <h2>Discounts</h2>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Non-Life Insurance</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>                              
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Auto Program</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>
                        </ContainerCard>                            
                        </div>
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Course Fees</h3>
                            <span className="image fit"><img src={pic09} alt="" /></span>
                        </ContainerCard>
                        </div>
                    </div>
                  
                </div>
            </section>
        </div>
    </Layout>
)
export default Freebies