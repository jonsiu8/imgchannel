import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import ltc from '../../assets/images/product-long-term.jpg'
import shortterm from '../../assets/images/product-short-term.jpg'
import seniorcare from '../../assets/images/product-senior.jpg'
import terminsurance from '../../assets/images/terminsurance.jpg'
import groupinsurance from '../../assets/images/groupinsurance.jpg'



    const ContainerCardHealth = styled.div`  
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
    const ContainerCardLife = styled.div`  
        background-color:white;  
        h3{color:#1A237E};
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


const Healthcareandinsurance = (props) => (
    <Layout>
        <Helmet>
            <title>Healthcare and Insurance</title>
            <meta name="description" content="Healthcare and Insurance Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    
                    <header className="major">
                        <h1>Healthcare and Insurance</h1>
                    </header>
                    
                    <h2>Healthcare plans</h2>
                        <div className="grid-wrapper">              
                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Long-term care</h3>
                                <span className="image fit"><img src={ltc} alt="" /></span>                               
                                <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>                              
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Short-term care</h3>
                                <span className="image fit"><img src={shortterm} alt="" /></span>
                                <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                            </ContainerCardHealth>                            
                            </div>

                            <div className="col-4">
                            <ContainerCardHealth>
                                <h3>Senior care</h3>
                                <span className="image fit"><img src={seniorcare} alt="" /></span>
                                <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                            </ContainerCardHealth>
                            </div>
                        </div>
                  
                    <hr className="major" />
                
                    <h2>Life Insurance</h2>
                    <div className="grid-wrapper">              
                            <div className="col-6">
                            <ContainerCardLife>
                                <h3>Term life insurance</h3>
                                <span className="image fit"><img src={terminsurance} alt="" /></span>
                                <Link to="/privileges/healthcareandinsurance/termlife" className="button small">Learn more</Link>
                            </ContainerCardLife>
                            </div>
                            <div className="col-6">
                            <ContainerCardLife>
                                <h3>Group life insurance</h3>
                                <span className="image fit"><img src={groupinsurance} alt="" /></span>
                                <Link to="/privileges/healthcareandinsurance/grouplife" className="button small">Get a quote</Link>
                            </ContainerCardLife>
                            </div>
                        </div>
                 
                </div>
            </section>
        </div>
    </Layout>
)
export default Healthcareandinsurance