import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Our beliefs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Privileges</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Affliates</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Become a member</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Be a financial educator</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Contact</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                {/*<li><a href="#" className="button fit">Log In</a></li>*/}
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
