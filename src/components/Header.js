import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from "styled-components"
import logo from "./logo.svg"

const Logo = styled.img`
  width: 220px;
  margin-top: 0px;
  padding-top: 11px;

  @media (max-width: 736px) {
    width: 145px;
  }
`

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><Logo src={logo}/></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} >Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
