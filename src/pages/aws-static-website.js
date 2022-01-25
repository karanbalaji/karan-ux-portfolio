import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



import "../components/pages.scss"
import Architect from "../images/portfolios/aws-static/architect.png"



//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const StaticPage = () => (
  <Layout>
    <SEO title="AWS Static Website | Gatsby | React" />
    
    <main className="project">

      <section className="project__description">
      

        
        <h1>Hosting this static website on AWS</h1>
        <h2>Project Summary</h2>
          <p>This project is about hosting the website with lowest cost and highest availability. </p>
         
        <h2>Problem</h2>
        <p>Users want the portfolio website to load fast and be available at all times where pricing plays a role to deliver this. </p>
       
        <h2>Solution</h2>
        <p>
        Using AWSDevloped the portfolio with Gatsby.js which is stored on AWS S3 Buckect. Used Route53 to configure custom domain attained from freenom.com . Configured CloudFront as CDN to distribute the content from S3 so that users don't access my s3 link directly. Finally, verifying the website to get a free SSL Certificate from Amazon Certificate Manager
        </p>

      </section>
      
      

      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Architect} alt="Problem Definition"/>
          
        </figure>


      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#283048" direction="right" to="/tng/">
            <div className="parent">
              <div className="child bg-tng"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#283048" to="/socialed/">
            <div className="parent">
              <div className="child bg-socialed"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default StaticPage
