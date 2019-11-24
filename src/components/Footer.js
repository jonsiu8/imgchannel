import React from 'react'
import styled from "styled-components"

const IconList = styled.ul`
    list-style-type: none;
`

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <IconList>
                <li><a href="https://www.facebook.com/imgch/" target="_blank" rel="noopener noreferrer" 
                className="icon alt fa-facebook"><span className="label"></span> fb.com/imgch</a></li>
               
                {/*<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
                <li>&copy; www.imgchannel.com</li>
            </IconList>
            {/* <ul className="copyright">
                <li>&copy; www.imgchannel.com</li>
            </ul> */}
        </div>
    </footer>
)

export default Footer
