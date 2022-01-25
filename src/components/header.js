//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Resume from "../resources/resume.pdf"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Header = ({ siteTitle }) => (

  <header className="header">

		<div className="header__inner-container">
			<div className="header__logo">
				<AniLink paintDrip hex="#333" to="/" className="header__logo--link" title="Karan Balaji" style={{textDecoration:'none'}}>
					<h1 style={{fontSize:'7rem', color:'white',fontWeight:400}}>K</h1>
				</AniLink>
			</div>
			<nav className="header__nav">
			<a href="https://blog.karanbalaji.com" className="header__nav-link" target="_blank" rel="Blog">BLOG</a>
			<a href="https://status.karanbalaji.com" className="header__nav-link" target="_blank" rel="Help">STATUS</a>
				<a href={Resume} className="header__nav-link" target="_blank" rel="Resume Download" download>RESUME</a>
				<a href="mailto:karanarjunb@gmail.com" className="header__nav-link">CONTACT</a>
				
			</nav>
		</div>
	</header>


)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
