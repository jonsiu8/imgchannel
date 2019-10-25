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
            <title>Affiliates</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>Affiliates</h1>
                    </header>

                    <h2 id="content">Powerful strategic partners</h2>                    
                    <p>Enjoy exclusive discounts, freebies, and access to our partners that help our members save and maximize their money.</p>
                        <Container>
                        <div className="grid-wrapper"> 
                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>            
                        </div>
                        
                        <div className="grid-wrapper"> 
                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>            
                        </div>

                        <div className="grid-wrapper"> 
                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>

                            <div className="col-2">
                                <span className="image fit"><img src={education} alt="" /></span>
                            </div>            
                        </div>
                        </Container>
                </div>
            </section>
        </div>
    </Layout>
)

export default Affiliates