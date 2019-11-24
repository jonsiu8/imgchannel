import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const StyledImg = styled(Img)`
  display: block;
  margin: auto;
  box-shadow: 4px 4px 4px 0 #070F29;
  padding: 0;
  max-width: 150px;
  border-radius: 100%;
  @media (max-width: 768px) {
    max-width: 120px;
}
`

const StyledLink = styled(Link)`
  display: block;
  margin-top: 2.5em;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  padding 0;
  max-width: 200px;
`

const HeaderTitle = styled.h2`
    text-align: center;
    display: block;
    font-size: 3em;
    margin-top: .5em;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    padding 0;
    font-family: Verdana, sans-serif;
    line-height: 1.1em;
    @media (max-width: 768px) {
        font-size: 2em;
  }
`
const SubHeader = styled.p`
    text-align: center;
    display: block;
    font-size: 1.4em;
    margin-top: .8em;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    padding 0;
    font-family: Verdana, sans-serif;
    line-height: 1.3em;
    @media (max-width: 768px) {
        font-size: 1.3em;
  }
`

const ThankYou = (props) => (
    <Layout>
        <Helmet>
            <title>Thank You - IMG Channel</title>
            <meta name="description" content="Thank You Page" />
        </Helmet>
   
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <StyledImg fluid={props.data.image01.childImageSharp.fluid} />
                    <HeaderTitle>Thank you!</HeaderTitle>
                    <SubHeader>Submit successful.  We will contact you soon.</SubHeader>
                    <StyledLink to="/" className="button small next">BACK TO HOME</StyledLink>
                </div>
            </section>
        </div>

    </Layout>
)

export default ThankYou

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
    image01: file(relativePath: { eq: "checkicon.png" }) {
      ...fluidImage
    }
  }
  `