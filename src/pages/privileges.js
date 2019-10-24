import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic09 from '../assets/images/pic09.jpg'
import pic01 from '../assets/images/pic01.jpg'
import education from '../assets/images/education.jpg'



const Privileges = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>Privileges</h1>
                    </header>

                    <h2 id="content">Membership Benefits</h2>                    
                    <p>Enjoy exclusive discounts, freebies, and access to our partners that help our members save and maximize their money.</p>
                        <div className="grid-wrapper">
 
                        <div className="col-4">
                            <h3>Financial education</h3>
                            <span className="image left"><img src={education} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <Link to="/privileges/financialeducation" className="button small">Learn more</Link>
                            <hr className="major" />
                        </div>
                        
                        <div className="col-4">
                            <h3>Healthcare and Insurance</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <Link to="/privileges/healthcareandinsurance" className="button small">Learn more</Link>                 
                            <hr className="major" />
                        </div>
                
                        <div className="col-4">
                            <h3>Investments</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>

                        </div>

                        <div className="grid-wrapper">
 
                        <div className="col-3">
                            <h3>Exclusive discounts</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>
                        
                        <div className="col-3">
                            <h3>Freebies</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>
                
                        <div className="col-3">
                            <h3>Career and Business</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>

                        <div className="col-3">
                            <h3>Services</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button small">Learn more</a>
                            <hr className="major" />
                        </div>

                        </div>
                </div>
            </section>

            

        </div>
    </Layout>
)

export default Privileges