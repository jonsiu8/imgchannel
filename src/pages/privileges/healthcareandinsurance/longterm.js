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
    margin: 1px;   
    `
    const Ulist = styled.ul`  
    list-style-type: none;
    color:white;
  `
    
const Longterm = (props) => (
    <Layout>
        <Helmet>
            <title>Long Term Care</title>
            <meta name="description" content="Long Term Care - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Long term care</h1>
                    </header>
                    <p>The Ultimate Kaiser Health Builder plan brings together the best features of a</p>
                    <Ulist>                                 
                        <li className="icon fa-check-square-o"> Long Term Health Coverage</li> 
                        <li className="icon fa-check-square-o"> Life Insurance</li> 
                        <li className="icon fa-check-square-o"> and Investment</li> 
                    </Ulist>
                    
                    <ContainerHealth>
                    <h2>Benefits</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Health Coverage</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Covers hospitalization and other medical needs even beyond age 60. 
                                    While most traditional healthcare only covers you while working, 
                                    this takes care of your healthcare needs even after retirement.</p>
                                
                            </ContainerCard>
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Life Insurance</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Protects against loss of life.  Gives you peace of mind with a four-way insurance coverage: 
                                    Term Life, Accidental and Dismemberment, Waiver of Installment Due to Death or Total Disabilty. </p>
                            </ContainerCard>
                            </div>
                            <div className="col-4">
                            <ContainerCard>
                                <h3>Investment</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>A portion of your funds are invested in shares of stocks and it will be managed by professional fund managers.  
                                    Your money will earn at an average interest of 10% per year through the stock market.</p>
                                </ContainerCard>
                            </div>
                        </div>
                    </ContainerHealth>

                    <ContainerHealth>
                    <h2>How it Works</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCard>
                                <h3>7 Years to Pay</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Covers hospitalization and other medical needs even beyond age 60. 
                                    While most traditional healthcare only covers you while working, 
                                    this takes care of your healthcare needs even after retirement.</p>
                                
                            </ContainerCard>
                            </div>
                            <div className="col-8">
                            <ContainerCard>
                                <h3>Life Insurance</h3>
                                <span className="image left"><img src={pic09} alt="" /></span>
                                <p>Protects against loss of life.  Gives you peace of mind with a four-way insurance coverage: 
                                    Term Life, Accidental and Dismemberment, Waiver of Installment Due to Death or Total Disabilty. </p>
                                {/* <span className="image fit"><img src={pic09} alt="" /></span>*/}
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