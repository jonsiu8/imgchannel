import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="IMG Channel"
                    meta={[
                        { name: 'description', content: 'Tools, Reference, Information' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Our beliefs</h3>
                                <p>Why and how we do it</p>
                            </header>
                            <Link to="/ourbeliefs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Privileges</h3>
                                <p>Exclusive benefits</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Affiliates</h3>
                                <p>Powerful strategic partners</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Become a member</h3>
                                <p>Join the campaign</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Be a financial educator</h3>
                                <p>an online freelance career</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Contact</h3>
                                <p>Need more information?</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About us</h2>
                            </header>
                            <p>IMG (International Marketing Group) is a membership platform.  We believe that everyone can become wealthy given the right chance and information.  Together with our partners we provide great benefits for our members around the globe.  Through our offices in the Philippines (Manila, Cebu, Davao, etc.), Hong Kong, Singapore, Macau, Dubai, Taiwan, etc.,  we provide comprehensive and continuous Financial Education programs and guidance for all members and achieve financial independence</p>
                            <ul className="actions">
                                {/*<li><Link to="https://img-corp.net/register.php?agentcode=6110hk" className="button next">Join now</Link></li>*/}
                                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button next">Join now</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex