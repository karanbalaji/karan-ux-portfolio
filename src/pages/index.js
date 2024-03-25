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
import { MdOutlineOpenInNew } from "react-icons/md";






const IndexPage = () => (
	<Layout>
		<SEO title="Portfolio" keywords={[`UX Designer`, `Ux design portfolio`, `UX portfolio`]} />

		

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
					<h4 style={{fontSize: "18px", textAlign:"left" }}>Greetings From Toronto:</h4>
						<p style={{textAlign:"left"}}>
						Hello! I’m <b>Karan Balaji</b>. Based in Toronto, I blend UX Design with Web Optimization, focusing on creating engaging, conversion-driven digital experiences. My expertise bridges the gap between design and technology, thanks to my background as a <a href="https://www.credly.com/badges/6bef5107-ec38-4f72-956d-2296cdeeab75/public_url"><b>certified AWS Solutions Architect</b></a>.

						</p>

						<h4 style={{fontSize: "18px", textAlign:"left" }}>My Expertise:</h4>
						<p style={{textAlign:"left"}}>Crafting User Experiences. Utilizing tools like <b>Figma, Adobe XD,</b> and front-end technologies (<b>HTML, CSS, JavaScript</b>), I design intuitive interfaces that stand on the shoulders of giants like <b>Material Design and Bootstrap</b>.</p>
						
						<h4 style={{fontSize: "18px", textAlign:"left" }}>Continuous Learning:</h4>
						<p style={{textAlign:"left"}}> Embracing Continuous Learning & AI. As a passionate advocate for perpetual growth, I highlight my journey with the <b>#100DaysOfDesign <a href="https://discord.gg/ecSaN5hMbY" target="_blank">(Discord)</a></b> challenge at <b>blog.karanbalaji.com</b>. There, I discuss how UX design’s evolution towards generalism—endorsed by visionaries like <b><a href="https://blog.karanbalaji.com/day-27-navigating-the-future-of-ux-specialist-vs-generalist-insights-with-jakob-nielsen-sarah-gibbons" target="_blank">Jakob Nielsen (My Article: UX Generalist vs Specialist)</a></b> and <b><a href="https://blog.karanbalaji.com/day-31-don-norman-on-designing-beyond-aesthetics-embracing-a-humanitarian-centric-and-generalist-future" target="_blank">Don Norman (Designing Beyond Aesthetics)</a></b>—is significantly enhanced by AI, bridging the gap in our knowledge and enabling the creation of more intuitive, humanitarian-centered designs.</p>
						<p style={{textAlign:"left"}}>For professional inquiries <a className="aside__contact-link" href="mailto:karanarjunb@gmail.com">karanarjunb@gmail.com </a></p>
						
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
									 Tweetup.io is a meeting app built using design thinking process</p>
									 <p style={{textAlign:'center', background:'#333', color:'#fff'}}> View End-to-End UX Design Process</p>
								</div>
						</AniLink> 
						<AniLink cover bg="#333" to="/exampro/" direction="left" title="ExamPro.co">
								<div className="parent">
									<div className="child bg-exampro">
										<h2 className="gallery__title">ExamPro.co</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Improving ExamPro.co UX process using design thinking</p>
									 <p style={{textAlign:'center', background:'#333', color:'#fff'}}> View UX Improvements</p>
								</div>
						</AniLink>
											

							<AniLink paintDrip hex="#333" to="/centennial-experience/" title="Centennial Experience">
								<div className="parent">
									<div className="child bg-centennial">
										<h2 className="gallery__title">CXD Centennial</h2>
										
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Designing a better cultural experience</p>
									 <p style={{textAlign:'center', background:'#333', color:'#fff'}}> View CX Project</p>
								</div>
							</AniLink>
							
							<AniLink paintDrip hex="#333" to="/tng/" title="Neighbourhood Group">
								<div className="parent">
									<div className="child bg-tng">
										<h2 className="gallery__title">TNG Group</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Redesigning the UX for a charity</p>
									 <p style={{textAlign:'center', background:'#333', color:'#fff'}}> View UX Research Project</p>
								</div>
							</AniLink>

							<AniLink paintDrip hex="#333" to="/aws-static-website/" title="AWS Static Hosting">
								<div className="parent">
									<div className="child bg-aws">
										<h2 className="gallery__title">AWS Architect</h2>
									</div>
									<p style={{padding:'15px',color: '#333',lineHeight:1.6,fontWeight:400,textAlign:"center"}}>
									 Architecting this portfolio on AWS </p>
									 <p style={{textAlign:'center', background:'#333', color:'#fff'}}> View this Portfolio's Code On GitHub</p>
								</div>
							</AniLink>
							<a
  href="https://blog.karanbalaji.com/day-27-navigating-the-future-of-ux-specialist-vs-generalist-insights-with-jakob-nielsen-sarah-gibbons"
  target="_blank"
  rel="noopener noreferrer"
  title="#100DaysOfDesign"
  className="ani-link"
  style={{ background: 'none' }}
>
  <div className="parent">
    <div className="child bg-100days">
      <h2 className="gallery__title">#100DaysOfDesign</h2>
    </div>
    <p
      style={{
        padding: '15px',
        color: '#333',
        lineHeight: 1.6,
        fontWeight: 400,
        textAlign: 'center',
      }}
    >
      #100DaysOfDesign journey through various mentors 
    </p>
	<p style={{textAlign:'center', background:'#333', color:'#fff'}}> View Blog </p>
  </div>
</a>

							
												
						</section>

					</article>
					
				</main>

		

	</Layout>
)

export default IndexPage
