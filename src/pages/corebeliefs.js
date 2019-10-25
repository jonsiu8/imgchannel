import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import BannerBeliefs from '../components/BannerBeliefs'
import { Link } from 'gatsby'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'

const Container = styled.div`  
    background-color:white;  
    h2{color:black};    
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
    max-width: 1600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `


const Corebeliefs = (props) => (
    <Layout>
        <Helmet>
            <title>Core beliefs</title>
            <meta name="description" content="Our beliefs Page" />
        </Helmet>

        <BannerBeliefs/>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">                 
                <Container>
                    <div className="grid-wrapper">                       
                        <div className="col-4">                                                       
                            <h2>Everyone can be financially independent</h2>
                            <p><span className="image fit"><img src={pic01} alt="" /></span>
                            Everyone can be financially independent given the right education, guidance and environment.
                            </p>  
                            <hr className="line1" />                                                                                        
                        </div>  
                        
                        <div className="col-4">                                                       
                            <h2>Everyone deserves a chance </h2>
                            <p><span className="image fit"><img src={pic02} alt="" /></span>
                            Everyone deserves a chance to improve and change their situation.
                            </p>  
                            <hr className="line1" />                                                                                        
                        </div>  
                           
                        <div className="col-4">                                                       
                            <h2>Everyone can help</h2>
                            <p><span className="image fit"><img src={pic03} alt="" /></span>
                            Everyone can provide help to anyone who needs it. 
                            </p>
                            <hr className="line1" />                                                                                         
                        </div>                                                
                    </div>      

                    <div className="grid-wrapper">                       
                        <div className="col-12">                                                       
                        <Link to="/becomeamember" className="button special small">become a member</Link>                                                                          
                        </div>                                                                
                    </div>           
                    </Container>
                </div>
            </section>
        </div>
    </Layout>
)

export default Corebeliefs