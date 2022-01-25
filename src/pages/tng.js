import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/pages.scss"
import Logo from "../images/portfolios/tng/logo.svg"

import Three from "../images/portfolios/tng/images/t3.png"
import Four from "../images/portfolios/tng/images/t4.png"
import Five from "../images/portfolios/tng/images/t5.png"
import Six from "../images/portfolios/tng/images/t6.png"
import Seven from "../images/portfolios/tng/images/t7.png"
import Eight from "../images/portfolios/tng/images/t8.png"
import Nine from "../images/portfolios/tng/images/t9.png"
import Ten from "../images/portfolios/tng/images/t10.png"
import Eleven from "../images/portfolios/tng/images/t11.png"
import Twelve from "../images/portfolios/tng/images/t12.png"
import Thirteen from "../images/portfolios/tng/images/t13.png"
import Fourteen from "../images/portfolios/tng/images/t14.png"
import Fifteen from "../images/portfolios/tng/images/t15.png"
import Sixteen from "../images/portfolios/tng/images/t16.png"
import Seventeen from "../images/portfolios/tng/images/t17.png"
import Eighteen from "../images/portfolios/tng/images/t18.png"
import Nineteen from "../images/portfolios/tng/images/t19.png"
import Twenty from "../images/portfolios/tng/images/t20.png"
import TwentyOne from "../images/portfolios/tng/images/t21.png"
import TwentyTwo from "../images/portfolios/tng/images/t22.png"
import TwentyThree from "../images/portfolios/tng/images/t23.png"
import TwentyFour from "../images/portfolios/tng/images/t24.png"
import TwentyFive from "../images/portfolios/tng/images/t25.png"
import TwentySix from "../images/portfolios/tng/images/t26.png"
import TwentySeven from "../images/portfolios/tng/images/t27.png"
import TwentyEight from "../images/portfolios/tng/images/t28.png"

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const TngPage = () => (
  <Layout>
    <SEO title="The Neighbourhood Group" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>The Neighbourhood Group</h1>
        <h2>Project Summary</h2>
        <p>
        In this project our team was assigned to redesign the experience of an exsisting website to improve enagagement and interactivity. The Neighbourhood Group is a charity that serves people at every stage of their lives, promotes independence and dignity, and
        engages the skills and talents of our neighbours to build a vibrant community. 
        </p>
        <h2>Problem</h2>
        <p>Users could not find the information they are looking for. Because of this there was very less engagement and not much returining users to the website</p>
        <h2>The Team</h2>
        <p>Krystal, Siddanth, Sonia, Lucas, Mjola and Karan</p>
        <h2>Solution</h2>
        <p>We rebuilt the information architecture based on the interviews and surveys. Categorized the target market into personas. Then we created a splash page so that the personas can be directed to the exact content they are looking for when they land on the website. And finally, to increase engagement, we added an interactive timeline.</p>

        <h1>Project Scope</h1>
        <ol>
          <li>User Research</li>
          <li>Limitations</li>
          <li>Personas</li>
          <li>Content Audit</li>
          <li>Comparative Analysis</li>
          <li>Key Recommendations</li>
          <li>Information Architecture</li>
          <li>User Journey</li>
          <li>Wireframes</li>
          <li>Interactive Features</li>
        </ol>
      </section>
      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">
        <figure>
          <img className="img-shadow width-fix" src={Four} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Five} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Six} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Seven} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Eight} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Nine} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Ten} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Eleven} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Twelve} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Thirteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Fourteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Fifteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Sixteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Seventeen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Eighteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Nineteen} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={Twenty} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyOne} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyTwo} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyThree} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyFour} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyFive} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentySix} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentySeven} alt=""/>
        </figure>
        <figure>
          <img className="img-shadow width-fix" src={TwentyEight} alt=""/>
        </figure>



          
        

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#eb8f00" direction="right" to="/centennial-experience/">
            <div className="parent">
              <div className="child bg-centennial"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#eb8f00" to="/aws-static-website/">
            <div className="parent">
              <div className="child bg-aws"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default TngPage
