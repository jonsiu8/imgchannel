import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/ourbeliefs">Our beliefs</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/privileges">Privileges</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/affiliates">Affliates</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/becomeamember">Become a member</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/financialeducator">Be a financial educator</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="https://img-corp.net/register.php?agentcode=6110hk" className="button special fit">Join now</a></li>
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
