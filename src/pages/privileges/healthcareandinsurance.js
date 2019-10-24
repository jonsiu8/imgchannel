import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../components/layout'

import pic09 from '../../assets/images/pic09.jpg'


const Healthcareandinsurance = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">

                    <header className="major">
                        <h1>Healthcare and Insurance</h1>
                    </header>

                        <div className="grid-wrapper">
 
                        <div className="col-4">
                            <h3>Healthcare plans</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Learn more</a>
                            <hr className="major" />
                        </div>
                        
                        <div className="col-4">
                            <h3>Term life insurance</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Learn more</a>
                            <hr className="major" />
                        </div>
                
                        <div className="col-4">
                            <h3>Group life insurance</h3>
                            <span className="image left"><img src={pic09} alt="" /></span>
                            <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                            <a href="#" className="button special small">Learn more</a>
                            <hr className="major" />
                        </div>

                        </div>
                </div>
            </section>

            

        </div>
    </Layout>
)

export default Healthcareandinsurance