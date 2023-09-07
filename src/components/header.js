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
				<AniLink paintDrip hex="#333" to="/" className="header__logo--link" title="Karan Balaji's UX portfolio" style={{textDecoration:'none'}}>
					<h1 style={{fontSize:'3rem', color:'white',fontWeight:400}}>KARAN BALAJI</h1>
				</AniLink>
			</div>
			<nav className="header__nav">
			<a href="https://blog.karanbalaji.com" className="header__nav-link" target="blank" rel="Blog">BLOG</a>
				
				<a href="mailto:karanarjunb@gmail.com" className="header__nav-link">EMAIL</a>
				
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
