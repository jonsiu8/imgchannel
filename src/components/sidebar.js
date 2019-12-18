import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from "styled-components"
import fbmessenger from '../assets/images/messageus.png'

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

const RecentContainer = styled.div`
  display: flex;
  margin: 0 0 1.5em 0;

  div { 
    //border: 1px #000000 solid;
  }

  h3 {
    color: #3277B3;
    color: #1a1a1a;
    margin: 0 0 0.2em 0;
    font-size: 1em;
    font-family: Georgia, serif;
    line-height: 1.35em;
    :hover {
      color: #3277B3;
      }
  }

  .box1 {
    flex: 1.5;
    align-items: center;
    margin: 0 0 0 0;
  }

  .box2 {
    flex: 4;
    align-items: center;
    margin: 0 0 0 .5em;
  }

  p {
    color: #666666;
    margin: 0 0 0 0;
    font-size: .75em;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  @media (max-width: 768px) {
    h3 {
        font-size: 1.1em;
    }

    p {
        font-size: .9em;        
    }
  }
`

const StyledImg = styled(Img)`
  margin: 0 0 0 0;
  padding 0;
  max-width: 180px;

  :hover {
    opacity: 0.8;
    box-shadow: 2px 2px 2px #3277B3;
    }
`

const HeaderRecent = styled.h2`
    color: #333333;
    margin: 1em 0 .5em 0;
    line-height: 1em;
`

const ButtonContainer = styled.div`
    margin: 0 0 1em 0;
    .button{
    background-color:#3277B3;
    color:white;     
}
`

const AStyled = styled.a`
  :link {color: #ffffff;}    
  :visited {color: #ffffff;}    
  :hover {color: #ffffff;}    
  :active {color: #ffffff;}
  float: right;
`

const StyledButtonImage = styled.img`
  margin: .4em 0 0 0;
  padding: 1px;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px #070F29;
  max-width: 143px;

  :hover {
    opacity: 0.9;
    box-shadow: 0 0 3px 2px #070F29;
  }

  @media (max-width: 768px) {
      max-width: 132px;
  }
`


const Sidebar = ({ author, authorFluid }) => (
  <div>
        <ButtonContainer><Link to="/blog" className="button next">Blog Homepage</Link></ButtonContainer>
        <ContainerForm>                
          <h2>Newsletters</h2>
          {/* <p>Receive new articles straight to your inbox.</p> */}
          <form name="blog-subscribe" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/subscribed"> 
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="blog-subscribe" /> 
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
        {/* messenger button */}
        <AStyled href="https://m.me/imgch/" target="_blank" rel="noopener noreferrer">
                  <StyledButtonImage src={fbmessenger} alt="message" /></AStyled>                           
              <div style={{clear: "right"}}/>  

         <HeaderRecent>Recent Posts</HeaderRecent>
             
             <StaticQuery query={sidebarQuery} render={(data) => (
                 <div>
                     {data.allMarkdownRemark.edges.map(({node}) => (
                      // <RecentContainer key={node.id}>
                      //   <Link to ={`/blog/${node.fields.slug}`}>
                      //     <StyledImg fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                      //   </Link>
                      //   <Link to ={`/blog/${node.fields.slug}`}>
                      //     <p><b>{node.frontmatter.title}</b></p>
                      //     <p><i>{node.frontmatter.date}</i> | <i>{node.timeToRead}-min read</i></p>
                      //   </Link> 
                      //   <hr/>  
                      // </RecentContainer>

                      <RecentContainer key={node.id}>                        
                          <div className="box1">
                            <Link to ={`/blog/${node.fields.slug}`}>
                              <StyledImg fluid={node.frontmatter.featuredImage.childImageSharp.fluid}/>
                            </Link>
                          </div>
                          <div className="box2">
                            <Link to ={`/blog/${node.fields.slug}`}>
                              <h3>{node.frontmatter.title}</h3>
                              <p>{node.frontmatter.date} | {node.timeToRead}-min read</p>
                            </Link>
                          </div>                                                 
                      </RecentContainer>
                     ))}
                 </div>
             )}/>
             
        <ButtonContainer><Link to="/freebook" className="button next">Free ebook here</Link></ButtonContainer>
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
                    timeToRead
                    frontmatter{
                        title
                        date(formatString: "MMM Do YYYY")                    
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