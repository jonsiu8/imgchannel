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
                    <p>The Ultimate Kaiser Health Builder plan brings together the best features of</p>
                    <Ulist>                                 
                        <li className="icon fa-check-square-o"> Long Term Health Coverage</li> 
                        <li className="icon fa-check-square-o"> Life Insurance</li> 
                        <li className="icon fa-check-square-o"> and Investment</li> 
                    </Ulist>
                    <ContainerHealth>
                    <h2>How it Works</h2>
                        <div className="grid-wrapper">              
                            <div className="col-3">
                            <ContainerCard>
                                <h3>Saving Period</h3>
                                <p>7 Years to Save</p>
                                <span className="image fit"><img src={pic09} alt="" /></span>
                            </ContainerCard>
                            </div>
                            <div className="col-6">
                            <ContainerCard>
                                <h3>Extended Period</h3>
                                <p>13 years to Wait</p>
                                <span className="image fit"><img src={pic09} alt="" /></span>                                
                            </ContainerCard>
                            </div>
                            <div className="col-3">
                            <ContainerCard>
                                <h3>Maturity</h3>
                                <p>Option to get cash value</p>
                                <span className="image fit"><img src={pic09} alt="" /></span>
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