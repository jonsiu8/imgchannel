import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const About = (props) => (
    <Layout>
        <Helmet>
            <title>About</title>
            <meta name="description" content="About Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-6">
                           
                            <h2>IMG</h2>
                           
                            <h4>IMG Mission</h4>
                            <p>To help create wealth for families.  To make a difference for families so there will be No family left behind.</p>
                            <h4>IMG Vision</h4>
                            <p>To build a new Financial Industry, where everyone is able to earn what the wealthy are earning by bringing the secrets of the wealthy to all.</p>
                            <hr className="major"/>
                        </div>
                        <div className="col-6">
                            <p>This website is operated by JFS and team.  They are independent representatives of International Marketing Group (IMG),
                            Headquarters: 9th Flr, King's Court Bldg 1, 2129 Chino Roces Ave, Makati City, Philippines.  Telephone: (02) 812-2551 / Fax: (02) 811-2327
                            </p>                             
                            <p>The purpose of this site is to give IMG Members easy access information online about IMG anytime and anywhere.  
                                It can be used to show some of the main benefits and privileges of being a member.
                            </p>
                            <p>
                                All IMG members are welcome to use this site for reference but be reminded that all information here are subject to
                                change anytime without any prior notice.  For the official IMG website please visit www.img-corp.com
                            </p>
                            <Link to="/becomeamember" className="button next">Become an IMG Member</Link>
                            {/* <ul className="actions">                                
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button next">Join now</a></li>
                            </ul> */}
                        </div>
                    </div>
                    {/* <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p> */}
                </div>
            </section>
        </div>

    </Layout>
)

export default About