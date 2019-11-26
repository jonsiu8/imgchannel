import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../../components/layout'
import { graphql } from "gatsby"
import Img from 'gatsby-image'
    
const Freeconsultation = (props) => (
    <Layout>
        <Helmet>
            <title>Free Doctor's Consultation</title>
            <meta name="description" content="Free Consultation - IMG Channel" />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Free Doctor's Consultation</h1>
                    </header>
                    <div className="grid-wrapper">
                        <div className="col-4">
                            <span className="image fit"><Img fluid={props.data.image01.childImageSharp.fluid} /></span>
                        </div>                        
                        <div className="col-8">                          
                            <h2>Unlimited FREE Consultation</h2>
                            <h3>and Get Discounts on Medical Services for IMG Members and their Immediate Families</h3>
                            <p>Available on all Kaiser Medical Center Clinics</p>
                            <p>https://kaisermedcenter.com/</p>
                            <hr className="major"/>                    
                        </div>
                        <div className="col-3">
                            <h4>MAKATI</h4>
                            <span className="image fit"><Img fluid={props.data.image02.childImageSharp.fluid} /></span>
                            <p>G/F King's Court Bldg. 1, <br/>2129 Don Chino Roces Ave. <br/>Makati City <br/>Tel: (02) 804 9988 / 804 7788</p>
                            <hr/>
                        </div>
                        <div className="col-3">
                            <h4>CEBU: MACTAN</h4>
                            <span className="image fit"><Img fluid={props.data.image03.childImageSharp.fluid} /></span>
                            <p>MDC Bldg., 2nd St. Corner <br/>Staffhouse MEZ 1, <br/> Lapu-Lapu City <br/>Tel: (032) 520 9377 / 520 9388</p>
                            <hr/>
                        </div>
                        <div className="col-3">
                            <h4>CEBU: SM SEASIDE</h4>
                            <span className="image fit"><Img fluid={props.data.image04.childImageSharp.fluid} /></span>
                            <p>Unit 0242 - 0246 <br/>Lower Ground Floor <br/>SM Seaside City, Cebu <br/>Tel: (032) 266 4206</p>
                            <hr/>
                        </div>
                        <div className="col-3">
                            <h4>CEBU: SM CITY</h4>
                            <span className="image fit"><Img fluid={props.data.image05.childImageSharp.fluid} /></span>
                            <p>2nd Floor (236 - 237) SM City <br/>Juan Luna Ave., <br/>North Reclamation Area <br/>Mabolo, Cebu</p>
                            <hr/>
                        </div>                                       
                    </div> 
                </div>
            </section>
        </div>
    </Layout>
)

export default Freeconsultation

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    image01: file(relativePath: { eq: "kaiserclinicbanner.png" }) {
      ...fluidImage
    }
    image02: file(relativePath: { eq: "kaisermedicalmakati.jpg" }) {
        ...fluidImage
    }
    image03: file(relativePath: { eq: "kaisermedicalmactan.jpg" }) {
        ...fluidImage
    }
    image04: file(relativePath: { eq: "kaisermedicalsmseaside.jpg" }) {
        ...fluidImage
    }
    image05: file(relativePath: { eq: "kaisermedicalsmcity.jpg" }) {
        ...fluidImage
    }
  }
  `