import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import styled from "styled-components"
import { Link } from 'gatsby'

import mutualfund from '../../assets/images/mutualfund.jpg'
import stocktrading from '../../assets/images/stocktrading.jpg'
import realestate from '../../assets/images/realestate.jpg'

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


const Investments = (props) => (
    <Layout>
        <Helmet>
            <title>Investments</title>
            <meta name="description" content="Investments - IMG Channel" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">                    
                    <header className="major">
                        <h1>Investments</h1>
                    </header>
                    <div className="grid-wrapper">              
                        <div className="col-4">
                        <ContainerCard>
                            <h3>Mutual Funds</h3>
                            <span className="image fit"><img src={mutualfund} alt="" /></span>                               
                            <Link to="/privileges/healthcareandinsurance/longterm" className="button special small">Learn more</Link>                              
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Stock Market</h3>
                            <span className="image fit"><img src={stocktrading} alt="" /></span>
                            <Link to="/privileges/healthcareandinsurance/shortterm" className="button special small">Learn more</Link>
                        </ContainerCard>                            
                        </div>

                        <div className="col-4">
                        <ContainerCard>
                            <h3>Real Estate</h3>
                            <span className="image fit"><img src={realestate} alt="" /></span>
                            <Link to="/privileges/healthcareandinsurance/seniorcare" className="button special small">Learn more</Link>
                        </ContainerCard>
                        </div>
                    </div>          
                </div>
            </section>
        </div>
    </Layout>
)
export default Investments