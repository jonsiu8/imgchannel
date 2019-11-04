import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import Banner from '../components/Banner'

// import bannerpic from '../assets/images/bannerhome.jpg'
// import BannerEducator from '../components/BannerEducator'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #3277B3;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HeroBanner = styled.div`
  padding: 20px 50px;

  @media (max-width: 768px) {
    padding: 10px 20px;
    text-align: center;
  }
`;

const HeroBannerParag = styled.p`
  font-size: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeroBannerTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0px;
  padding-bottom: 0;
  border-bottom: none;
  font-size: 54px;
  color: white;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="IMG Channel"
                    meta={[
                        { name: 'description', content: 'Tools, Reference, Information' },
                        { name: 'keywords', content: 'img, benefits' },
                    ]}
                >
                </Helmet>

                <Banner/>

                {/*<Banner />*/}        
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Core Beliefs</h3>
                                <p>Why and how we do it</p>
                            </header>
                            <Link to="/corebeliefs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Privileges</h3>
                                <p>Exclusive benefits</p>
                            </header>
                            <Link to="/privileges" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Affiliates</h3>
                                <p>Powerful strategic partners</p>
                            </header>
                            <Link to="/affiliates" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Become a Member</h3>
                                <p>Join the campaign</p>
                            </header>
                            <Link to="/becomeamember" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Be a Financial Educator</h3>
                                <p>an online freelance career</p>
                            </header>
                            <Link to="/financialeducator" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Contact</h3>
                                <p>We are always ready to assist you</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <div className="grid-wrapper">
                                <div className="col-6">
                                    <header className="major">
                                    <h2>About IMG</h2>
                                    </header>
                                    <h4>IMG Mission</h4>
                                    <p>To help create wealth for families.  To make a difference for families so there will be No family left behind.</p>
                                    <h4>IMG Vision</h4>
                                    <p>To build a new Financial Industry, where everyone is able to earn what the wealthy are earning by bringing the secrets of the wealthy to all.</p>
                                    <hr className="major"/>
                                </div>
                                <div className="col-6">
                                    <p>This website is operated by Jon Siu and team.  They are independent representatives of International Marketing Group (IMG),
                                    Headquarters: 9th Flr, King's Court Bldg 1, 2129 Chino Roces Ave, Makati City, Philippines.  Telephone: (02) 812-2551 / Fax: (02) 811-2327
                                    </p>                             
                                    <p>The purpose of this site is to give IMG Members easy access information online about IMG anytime and anywhere.  
                                        It can be used to show some of the main benefits and privileges of being a member.
                                    </p>
                                    <p>
                                        All IMG members are welcome to use this site for reference but be reminded that all information here are subject to
                                        change anytime without any prior notice.  For the official IMG website please visit www.img-corp.com
                                    </p>
                                    <ul className="actions">                                
                                        <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button next">Join now</a></li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex