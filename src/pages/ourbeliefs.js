import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'


const Ourbeliefs = (props) => (
    <Layout>
        <Helmet>
            <title>Our beliefs</title>
            <meta name="description" content="Our beliefs Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Our beliefs</h1>
                    </header>                  
                
                    <div className="grid-wrapper">                       
                        <div className="col-7">                                                       
                            <h2>Everyone can be financially independent</h2>
                            <p><span className="image left"><img src={pic01} alt="" /></span>
                            Everyone can be financially independent given the right education, guidance and environment.
                            </p>                                                                                          
                        </div>                        
                    </div>

                    <hr className="major" />

                    <div className="grid-wrapper">                       
                        <div className="col-7">                                                       
                            <h2>Everyone deserves a chance </h2>
                            <p><span className="image left"><img src={pic02} alt="" /></span>
                            Everyone deserves a chance to improve and change their situation.
                            </p>                                                                                          
                        </div>                        
                    </div>

                    <hr className="major" />

                    <div className="grid-wrapper">                       
                        <div className="col-7">                                                       
                            <h2>Everyone can help</h2>
                            <p><span className="image left"><img src={pic03} alt="" /></span>
                            Everyone can provide help to anyone who needs it. 
                            </p>                                                                                          
                        </div>                        
                    </div>
                </div>
            </section>
        </div>
    </Layout>
)

export default Ourbeliefs