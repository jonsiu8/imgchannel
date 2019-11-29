import React from 'react'
import { Link } from 'gatsby'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><Link to="/" className="icon alt fa-home"><span className="label">home</span></Link></li>
                <li><a href="https://fb.com/imgch/" target="_blank" rel="noopener noreferrer" 
                className="icon alt fa-facebook-official"><span className="label">facebook</span></a></li>
                <li><a href="https://www.instagram.com/imgchannelph/" target="_blank" rel="noopener noreferrer" 
                className="icon alt fa-instagram"><span className="label">messenger</span></a></li>
                <li><a href="https://m.me/imgch/" target="_blank" rel="noopener noreferrer" 
                className="icon alt fa-comment"><span className="label">messenger</span></a></li>
               
                {/*<li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>*/}
                {/* <li>&copy; www.imgchannel.com</li> */}
            </ul>
            <ul className="copyright">
                <li>&copy; www.imgchannel.com</li>
            </ul>
        </div>
    </footer>
)

export default Footer
