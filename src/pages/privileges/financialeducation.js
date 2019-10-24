import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import pic09 from '../../assets/images/pic09.jpg'
import webinars from '../../assets/images/webinars.png'


const Financialeducation = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>Financial Education</h1>
                    </header>

                        <div className="grid-wrapper">
 
                        <div className="col-4">
                            <h3>Webinars, workshops, e-books, and events</h3>
                            <span className="image left"><img src={webinars} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Start now</a>
                            <hr className="major" />
                        </div>
                        
                        <div className="col-4">
                            <h3>Financial checkup</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Start now</a>
                            <hr className="major" />
                        </div>
                
                        <div className="col-4">
                            <h3>Associate financial planner program</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Start now</a>
                            <hr className="major" />
                        </div>

                        </div>
                </div>
            </section>

            

        </div>
    </Layout>
)

export default Financialeducation