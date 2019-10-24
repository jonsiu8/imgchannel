import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from "styled-components";
import logo from "./logo.svg"

const Logo = styled.img`
  width: 35px;
  margin-top: 10px;

  @media (max-width: 736px) {
    width: 28px;
  }
`;

const Header = (props) => (
    <header id="header" className="alt">
        {/*<Link to="/" className="logo"><strong>IMG</strong> <span>Channel</span></Link>*/}
        <Link to="/" className="logo"><Logo src={logo}/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
