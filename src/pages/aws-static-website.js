import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



import "../components/pages.scss"
import Architect from "../images/portfolios/aws-static/architect.png"



//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
// Github announcement component
import Announcement from 'react-announcement'
import Github from '..//images/svg-icons/github.png'


const StaticPage = () => (
  <Layout>
    <SEO title="AWS Static Website | Gatsby | React" />
    
    <main className="project">
    <Announcement
          title="View this project and kanban board on Github"
          subtitle="You can view all the upcoming features and updates on Github."
          link="https://github.com/karanbalaji/karan-ux-portfolio"
          secondsBeforeBannerShows={2}
		  imageSource={Github}
		  daysToLive={0}
     				 />
      <section className="project__description">
      

        
        <h1>Hosting this static website on AWS</h1>
        <h2>Project Summary</h2>
          <p>This project is about hosting the website with lowest cost and highest availability. </p>
         
        <h2>Problem</h2>
        <p>Users want the portfolio website to load fast and be available at all times </p>
       
        <h2>Solution</h2>
        <ol>
        <li>Used Route53 to configure and buy a custom domain.</li>
        <li>Devloped this portfolio using Gatsby.js which is hosted on an AWS S3 Buckect</li>
        <li>Configured CloudFront as CDN to distribute the content from the S3 bucket so that users don't access my S3 bucket link directly.</li>
        <li>Finally, verifying the website to get a free SSL Certificate from Amazon Certificate Manager.</li>
        </ol>

        <h2>Github Repo</h2>
        <p>This is my <a href='https://github.com/karanbalaji/karan-ux-portfolio'target="blank">Github repo</a> and <a href='https://github.com/karanbalaji/karan-ux-portfolio/projects/1'target="blank">Kanban board</a> for the portfolio project</p>
      </section>
      <article className="project__content">

        <figure>
          <img className="img-shadow" src={Architect} alt="AWS architect"/>
          
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
