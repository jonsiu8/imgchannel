import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (    
    <nav id="menu">
  
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/corebeliefs">Core beliefs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/privileges">Privileges</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/affiliates">Affliates</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/becomeamember">Become a member</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/financialeducator">Be a financial educator</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Blog</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contributors">Contributors</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
            <ul className="actions vertical">            
                <Link to="/becomeamember" className="button fit">Join the campaign</Link> 
            </ul>
        </div>
   
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
