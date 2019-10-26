import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import thankyou from '../assets/images/thank-you.jpg'

const Container = styled.div`  
    background-color: #DCE1E5;  
    h1{color:black};
    h2{color:black};    
    color: black;

    .button{
        background-color:#221D71;
        color:white;     
    }
    padding: 0px 0px 0px 0px;
    margin: 3rem auto;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `


const Thankyou = (props) => (
    <Layout>
        <Helmet>
            <title>Thank You - IMG Channel</title>
            <meta name="description" content="Thank You Page" />
        </Helmet>
        <Container>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">                           
                    <div className="grid-wrapper">                 
                        <div className="col-12">                                                      
                            <h1><center>Message Sent!</center></h1>
                            <span className="image fit"><img src={thankyou} alt="" /></span>
                            <h2><center>Thank you very much.</center></h2>
                        </div>                    
                    </div>             
                </div>
            </section>
        </div>
        </Container>
    </Layout>
)

export default Thankyou