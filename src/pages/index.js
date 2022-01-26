//import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Img from "../components/image";
import "../components/index.scss";
import EmailIcon from "../images/svg-icons/email.svg?name=EmailIcon";
import LinkedinIcon from "../images/svg-icons/linkedin.svg?name=LinkedinIcon";

//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
// Text looping 
import TextLoop from "react-text-loop"





const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />

		{

				<main className="index__inner-wrapper">
					<aside className="aside">
		
					<Img  />
						
					<h3>
                <TextLoop springConfig={{ stiffness: 180, damping: 12, fade: true }}>
                    <span>Welcome</span>
                    <span>Bienvenue</span>
                    <span>வணக்கம்</span>
                </TextLoop>
            </h3>
						
						<p style={{textAlign:"left"}}>My name is<span className="aside__important-text"> Karan Balaji</span> and I'm a global citizen <h1 className="aside__h1"> based in Toronto</h1>. I'm a <h1 className="aside__h1"> UX designer,  UX engineer & a certified AWS Solution Architect</h1> </p>
						<p style={{textAlign:"left"}}>I design the touchpoints for the user & customer. I bridge the gap between design and developers by working throughout the UX process and i can make rapid prototypes using tools like  <h1 className="aside__h1">Figma, Adobe XD, HTML, CSS, JS ES6 with popular design systems like Material Design & Amplify UI and document it on Git & Github</h1><button>Test</button> </p>
						<p style={{textAlign:"left"}}>In this portfolio, I showcase every project that I made through <h1 className="aside__h1">design thinking</h1> with simple and sensational User Interface.</p>  <h1 className="aside__h1"></h1>    <h1 className="aside__h1"></h1>
						<p style={{textAlign:"left"}}>You can reach me at <a className="aside__contact-link" href="mailto:karanarjunb@gmail.com">karanarjunb@gmail.com </a> for any project that you might have in mind.</p>
						
						<div className="aside__social-icons">
							<a className="linkedin-icon" href="https://www.linkedin.com/in/karanbalaji/" target="_blank" rel="nofollow noopener noreferrer" title="LinkedIn"><LinkedinIcon /></a>
							<a className="email-icon" href="mailto:karanarjunb@gmail.com" title="Send Email"><EmailIcon /></a>
						</div>
						
		
					
					</aside>

					<article className="main">
					
						<section className="gallery">
						 
						  <AniLink cover bg="#333" to="/socialed/" direction="left" title="socialed">
								<div className="parent">
									<div className="child bg-socialed">
										<h2 className="gallery__title">Tweetup</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Tweetup.io a meeting app built using design thinking process</p>
								</div>
						</AniLink> 

							<AniLink paintDrip hex="#333" to="/centennial-experience/" title="Centennial Experience">
								<div className="parent">
									<div className="child bg-centennial">
										<h2 className="gallery__title">CXD Centennial</h2>
										
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Designing a better cultural experience</p>
								</div>
							</AniLink>
							
							<AniLink paintDrip hex="#333" to="/tng/" title="Neighbourhood Group">
								<div className="parent">
									<div className="child bg-tng">
										<h2 className="gallery__title">TNG Group</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Redesigning the UX for a charity</p>
								</div>
							</AniLink>

							<AniLink paintDrip hex="#333" to="/aws-static-website/" title="AWS Static Hosting">
								<div className="parent">
									<div className="child bg-aws">
										<h2 className="gallery__title">AWS Architect</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Architecting this portfolio on AWS </p>
								</div>
							</AniLink>

							
												
						</section>

					</article>

				</main>

		}

	</Layout>
)

export default IndexPage
