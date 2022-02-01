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
// Announcement for this page
import Announcement from 'react-announcement'
import Youtube from '../images/svg-icons/youtube.png'





const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" keywords={[`UX Designer`, `Ux design portfolio`, `UX portfolio`]} />

		{

				<main className="index__inner-wrapper">
					<Announcement
          title="Watch my tech talk about A/B testing on AWS for UX engineers"
          subtitle="4 ways to do A/B testing using AWS."
          link="https://youtu.be/XlGw3iNBccc"
          secondsBeforeBannerShows={3.5}
		  imageSource={Youtube}
		  daysToLive={0}
     				 />
					
					<aside className="aside">
		
					<Img  />
						
					<h2 style={{justifySelf:'center', textAlign:"center", fontWeight:300}}>
                <TextLoop springConfig={{ stiffness: 180, damping: 12, fade: true }}>
                    <span>Welcome</span>
                    <span>Bienvenue</span>
                    <span>வணக்கம்</span>
                </TextLoop>
            </h2>
			
						<p style={{textAlign:"left"}}>My name is<span className="aside__important-text"> Karan Balaji</span> and I'm a global citizen <h1 className="aside__h1"> based in Toronto</h1>. I'm a <h1 className="aside__h1"> UX designer,  UX engineer and a <a href='https://www.credly.com/badges/6bef5107-ec38-4f72-956d-2296cdeeab75/public_url'target="blank">certified AWS solutions architect</a></h1> </p>
						<p style={{textAlign:"left"}}>I bridge the gap between design and developers by working throughout the UX process and can make rapid prototypes with <b>Figma, Adobe XD, HTML, CSS, JS with popular design systems like Material Design and Amplify UI and document it on Git and <a href='https://github.com/karanbalaji'target="blank">Github</a></b></p>
						<p style={{textAlign:"left"}}>Watch my tech talk about <a href='https://www.youtube.com/watch?v=XlGw3iNBccc&ab_channel=ExamPro'target="blank">A/B testing on AWS</a> for UX engineers</p>
						<p style={{textAlign:"left"}}>In this portfolio which is built on Gatsby.js, I showcase every project with various methodologies such as <h1 className="aside__h1">design thinking</h1> using simple and sensational user interface.</p>  
						<p style={{textAlign:"left"}}>For professional inquiries <a className="aside__contact-link" href="mailto:karanarjunb@gmail.com">karanarjunb@gmail.com </a></p>
						
						<div className="aside__social-icons">
							<a className="linkedin-icon" href="https://www.linkedin.com/in/karanbalaji/" target="_blank" rel="nofollow noopener noreferrer" title="LinkedIn"><LinkedinIcon /></a>
							<a className="email-icon" href="mailto:karanarjunb@gmail.com" title="Send Email"><EmailIcon /></a>
							
						</div>
						
		
					
					</aside>

					<article className="main">
					
						<section className="gallery">
						 
						<AniLink cover bg="#333" to="/exampro/" direction="left" title="ExamPro.co">
								<div className="parent">
									<div className="child bg-exampro">
										<h2 className="gallery__title">ExamPro.co</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Improving ExamPro.co UX process using design thinking</p>
								</div>
						</AniLink>

						  <AniLink cover bg="#333" to="/socialed/" direction="left" title="socialed">
								<div className="parent">
									<div className="child bg-socialed">
										<h2 className="gallery__title">Tweetup</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Tweetup.io is a meeting app built using design thinking process</p>
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
