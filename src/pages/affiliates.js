import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerAffiliates from '../components/BannerAffiliates'

import Affiliate01 from '../assets/images/Affiliate01.png'
import Affiliate02 from '../assets/images/Affiliate02.png'
import Affiliate03 from '../assets/images/Affiliate03.png'
import Affiliate04 from '../assets/images/Affiliate04.png'
import Affiliate05 from '../assets/images/Affiliate05.png'
import Affiliate06 from '../assets/images/Affiliate06.png'
import Affiliate07 from '../assets/images/Affiliate07.png'
import Affiliate08 from '../assets/images/Affiliate08.png'
import Affiliate09 from '../assets/images/Affiliate09.png'

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
            <meta name="description" content="Affiliates Page" />
        </Helmet>

        <BannerAffiliates />

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <h2 id="content">Our Powerful Strategic Partners</h2>
                        <Container>
                        <div className="grid-wrapper"> 
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate01} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate02} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate03} alt="" /></span>
                            </div>                         
                        </div>
                        <div className="grid-wrapper"> 
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate04} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate05} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate06} alt="" /></span>
                            </div>                         
                        </div>
                        <div className="grid-wrapper"> 
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate07} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate08} alt="" /></span>
                            </div>
                            <div className="col-4">
                                <span className="image fit"><img src={Affiliate09} alt="" /></span>
                            </div>                         
                        </div>
                       
                        </Container>
                </div>
            </section>
        </div>
    </Layout>
)

export default Affiliates