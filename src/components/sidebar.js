import React from 'react'
import { CardText, Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from "styled-components"

const ContainerForm = styled.div`
    max-width: 600px;
    border-style: solid;
    border-width: 5px;
    border-color: #3277B3;
    background-color:#3277B3;
    margin: 0 0 .5em 0;
    padding: 1em;
    h2 {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .2em 0;
        font-size: 1.8em;
    }
    p {
        color: #ffffff;
        line-height: 1.3em;
        margin: 0 0 .7em 0;
        font-size: 1.1em;
    }
`

const Sidebar = ({ author, authorFluid }) => (
    <div>
   
        <ContainerForm>                
            <h2>Newsletter</h2>
            <form name="subblogslist" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/subscribed"> 
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="subblogslist" /> 
                <div className="field">
                    <label htmlFor="name">Name
                    <input type="text" name="name" id="name" required/>
                    </label>                                            
                </div>
                <div className="field">
                    <label htmlFor="email">Email
                    <input type="text" name="email" id="email" required/>
                    </label>                                         
                </div>
                <div className="6u 12u(small)">
                    <input type="checkbox" id="amember" name="amember" />
                    <label htmlFor="amember">already an IMG member</label>
                </div>  
                <ul className="actions">                                            
                    <input type="submit" value="Subscribe" className="button" />                                                                      
                </ul>
            </form>   
        </ContainerForm> 
  

        {/* <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase">
                    Advertisement
                </CardTitle>
                <img 
                src="https://via.placeholder.com/320x200" 
                alt="Advert" 
                style={{ width: "100%"}}
                />
            </CardBody>
        </Card> */}

        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Recent Posts
                </CardTitle>
                <StaticQuery query={sidebarQuery} render={(data) => (
                    <div>
                        {data.allMarkdownRemark.edges.map(({node}) => (
                            <Card key={node.id}>
                                <Link to={node.fields.slug}>
                                  <Img className="card-image-top" fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>  
                                </Link>
                                <CardBody>
                                    <CardTitle>
                                        <Link to={node.fields.slug}>
                                        {node.frontmatter.title}
                                        </Link>
                                    </CardTitle>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                )}/>
            </CardBody>
        </Card>

    </div>
)

const sidebarQuery = graphql`
    query sidebarQuery {
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC}
            limit: 3
        ) {
            edges{
                node{
                    id
                    frontmatter{
                        title                        
                        featuredImage{
                            childImageSharp{
                                fluid(maxWidth:300){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default Sidebar