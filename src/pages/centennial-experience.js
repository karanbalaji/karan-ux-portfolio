import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/portfolios/cxd/images/logo.svg"
import One from "../images/portfolios/cxd/images/1.png"
import Two from "../images/portfolios/cxd/images/2.png"
import Three from "../images/portfolios/cxd/images/3.png"
import ThreeOne from "../images/portfolios/cxd/images/3.1.png"
import ThreeTwo from "../images/portfolios/cxd/images/3.2.png"
import ThreeThree from "../images/portfolios/cxd/images/3.3.png"
import Four from "../images/portfolios/cxd/images/4.png"
import Five from "../images/portfolios/cxd/images/5.png"
import Six from "../images/portfolios/cxd/images/6.png"
import SixeOne from "../images/portfolios/cxd/images/6.1.png"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const StorkPage = () => (
  <Layout>
    <SEO title="The Stork" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Improving Cultural Experience</h1>
        <h2>Project Summary</h2>
        <p>
        At Centennial, the students are from diverse cultural backgrounds who identify and engage with distinct cultural traditions. The College strives to develop a holistic learning experience that will foster student growth and further develop an understanding across the College on how increasing cultural capital can impact academic and career success. 
        </p>
        
        <h2>Problem</h2>
        <p>Student Life is securing consulting services from MKTG-731 to provide a report on how the College can further facilitate the development of engaging, inspiring, and inclusive spaces, places, and communities at the College.  </p>
        <h2>The Team</h2>
        <p>Pratiba Nautiyal, Thomas Mathew, Astrid Gomez, Aura Chavez and Karan Balaji.</p>
        <h2>Solution</h2>
        <p> We redesigned the customer journey map where our key recommendations are optimizing digital communication channels (Event Brite, Google Calendar), carrying out weekly cultural activities involving different cultures, allow teachers to conduct one cultural activity. </p>
      
        <h1>Project Scope</h1>
        <ol>
          <li>Objectives</li>
          <li>Issues In Cultural Transitions</li>
          <li>Personas</li>
          <li>Customer Journey Map Of Current Experience</li>
          <li>Pain Points</li>
          <li>Key Recommendations</li>
          <li>Opimized Customer Journey Map</li>
        </ol>
      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

        <figure >
        
          <img className="img-shadow width-fix" src={One} alt="First"/>
        </figure>

        <figure>
          <img className="img-shadow width-fix" src={Two} alt="Second"/>
        </figure>
          
        <figure>
          <img className="img-shadow width-fix" src={Three} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow width-fix" src={ThreeOne} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow width-fix" src={ThreeTwo} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow width-fix" src={ThreeThree} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow" src={Four} alt=""/>
        </figure>

        <figure>
          <img className="img-shadow width-fix" src={Five} alt=""/>
        </figure>
        
        <figure>
          <img className="img-shadow width-fix" src={Six} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={SixeOne} alt=""/>
        </figure>

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#283048" direction="right" to="/socialed/">
            <div className="parent">
              <div className="child bg-socialed"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#283048" to="/tng">
            <div className="parent">
              <div className="child bg-tng"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default StorkPage
