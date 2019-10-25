import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import styled from "styled-components"

import pic09 from '../../../assets/images/pic09.jpg'

const ContainerHealth = styled.div`  
    background-color:#13778F;  
    h2{color:white};    
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
    margin: 1px;   
    `

const Longterm = (props) => (
    <Layout>
        <Helmet>
            <title>Long term care</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Long term care</h1>
                    </header>
                    <ContainerHealth>
                    <h2>Ultimate Kaiser Health Builder</h2>
                        <div className="grid-wrapper">              
                            <div className="col-12">
                            <ContainerCard>
                                <h3>Long-term care</h3>
                                <span className="image fit"><img src={pic09} alt="" /></span>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <a href="#" className="button special small">Start now</a>
                                </ContainerCard>
                            </div>
                        </div>
                    </ContainerHealth>
                </div>
            </section>
        </div>
    </Layout>
)
export default Longterm