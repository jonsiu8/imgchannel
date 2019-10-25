import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import styled from "styled-components"
import BannerMember from '../components/BannerMember'

import pic09 from '../assets/images/pic09.jpg'
import education from '../assets/images/education.jpg'

const Container = styled.div`  
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
    margin: 3rem auto;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  const ContainerCard = styled.div`  
    background-color:#F2F2F2;  
    h3{color:black};
    h4{color:black};    
    color: black;
    .button{
        background-color:#3277B3;
        color:white;     
    }
    hr.line1 {border-top: 1px solid black;}    
    box-shadow: 5px 5px 5px #1E1E1E;
    padding: 25px;
    margin: 3rem auto;
   
  `
const Becomeamember = (props) => (
    <Layout>
        <Helmet>
            <title>Become a Member</title>
            <meta name="description" content="Membership Page" />
        </Helmet>

        <BannerMember />
        
        <div id="main" className="alt">
            <section id="one">            
                <div className="inner">    
                    <Container>             
                        <div className="grid-wrapper">                         
                            <div className="col-8">                          
                                <h3>Why should I become a member?</h3>
                                
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p> 
                            </div>                 
                            <div className="col-4">   
                                <ContainerCard>
                                <span className="image fit"><img src={pic09} alt="" /></span>
                                <h4>Join us, be part of the movement and enjoy the privileges of being an IMG member now.</h4>
                                <a href="https://img-corp.net/register.php?agentcode=6110hk" className="button special small">Become a Member Now</a>
                                </ContainerCard>
                            </div>      
                        </div>   
                    </Container>                       
                </div>
            </section>
        </div>
    </Layout>
)

export default Becomeamember