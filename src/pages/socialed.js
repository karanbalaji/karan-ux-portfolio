import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



import "../components/pages.scss"
import Logo from "../images/portfolios/socialed/logo.svg"
import Persona from "../images/portfolios/socialed/persona-student.png"
import Maslow from "../images/portfolios/socialed/maslow.png"
import Sitemap from "../images/portfolios/socialed/flow.png"
import Home from "../images/portfolios/socialed/screens/home.png"
import Description from "../images/portfolios/socialed/screens/description.png"
import Matchmaking from "../images/portfolios/socialed/screens/matchmaking.png"
import Places from "../images/portfolios/socialed/screens/places.png"
import Prototype from "../images/portfolios/socialed/video/new-tweetup.mp4"


//import Link from 'gatsby-plugin-transition-link'
//import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const SocialedPage = () => (
  <Layout>
    <SEO title="Tweetup.io" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>Tweetup.io</h1>
        <h2>Project Summary</h2>
        <p>
        I built a side project called Tweetup.io (Socialed) which is a socializing app that brings people together to do an activity (bowling, coffee, etc.) which bonds people for effective interaction of ideas, emotions, experiences in groups or person without the use of messenger technology. It is targeted for users ages between 18-45 who maybe students & working professionals. Tweetup.io uniqueness is that it is designed specifically for people who want to find another people/group for socializing in person.
        </p>
        <h2>Pitch Summary</h2>
        <p>
        This is the react.js presentation of the app <a href='http://pitch.Tweetup.io' target='blank'>pitch.tweetup.io</a> 
        </p>
        <h2>Problem</h2>
        <p>People engage less in social activities because their social circle are unavaiable. This is because of the modern lifestyle which focuses on the individuality where they travel often or move to a new location frequently.</p>

        <h2>Solution</h2>

        <p>I made a mobile app for people who want to quickly meet and build the social circle based on activities such as games (Bowling, Snooker. etc).</p>
        
        <h1>Project Scope</h1>
        <ol>
          <li>Empathizing The User</li>
          <li>Defining Standpoint</li>
          <li>Ideating</li>
          <li>Prototyping</li>
          <li>Testing Learning Outcomes</li>
        </ol>
      </section>
      

      
      <section className="project__logo"> <video className="img-shadow " src={Prototype}  autoplay="" loop="" alt="Prototype Video" controls /></section>

      <article className="project__content">
        <figure className='white-bg'>
        <h1>1. Empathizing The User</h1>
        <p>This is to understand the psychology of human & their behaviour in social groups. Based on this research we understand how humans are genetically programmed to live in groups for thousands of years & the modern lifestyle has forced us to practice individuality </p>
        <p>Credit:Kurzgesagt – In a Nutshell</p>
        <iframe title="Lonliness Video"  src="https://www.youtube.com/embed/n3Xv_g3g-mA?start=214" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </figure>

        <figure className='white-bg'>
        <h1>Empathize (Learning Outcomes)</h1>
        <ul>
          <li> Being isolated because of the modern life, people yearn a social interaction.</li>
          <li>These audiences prioritize a immediate social connection than being specific about the people they meet.</li>
          <li>These people wants to feel being around with lot of people other than their known circle. ( Wife, Girlfriend, Best-Friends).</li>
          <li>Chronic loneliness arises due to culture, technology & practice of  individuality in the modern world</li>
          <li>Over hundred thousand year people have been programmed to live life in large groups than with few or individually. </li>
        </ul>
        </figure>

        <figure>
          <img className="img-shadow" src={Persona} alt="Persona Template"/>
        </figure>

        <figure className='white-bg'>
        <h1>2. Defining Standpoint</h1>
        <p>The standpoint is to bring back the users to feel that they can quickly get to meet people in groups without excessive initiating interaction like a messenger technology. They must be able to go and quickly interact with other people comfortably by doing activities like bowling, pool bar, darts etc which will make them feel bonded.</p>
        </figure>

        <figure className='white-bg'>
        <h1>3. Ideate</h1>
        <ul>
          <li>Users need to see where to find people to socialize in person. </li>
          <li>Users must be able to socialize in groups or more.</li>
          <li>Users must be able to find people other than their know circle.</li>
          <li>There should be less virtual way of communication. Most of the information must delivered when people interact in person. (Bad ex : SnapChat Stories)</li>

        </ul>
        </figure>

        <figure className='white-bg'>
        <h1>Ideating Relevant Functionality</h1>
        <p>Based on Maslow's Theory Of Hierarchy Need we organize user's need through each phase </p>
          <img className="img-shadow" src={Maslow} alt="Functionality Based on Maslow"/>
        </figure>

        <figure className='white-bg' style={{textAlign:"center"}}>
        <h1>Ideating User Flow</h1>
        
          <img className="img-shadow" src={Sitemap} alt="Functionality Based on Maslow"/>
        </figure>

        <figure className='white-bg'>
        <h1>4. Prototype</h1>
        <p>In this stage we quickly used paper prototypes to quickly identify the flow & then procedded to high fidelity prototype using Adobe XD</p>
        </figure>

        <figure>
        <img className="img-shadow" src={Home} alt="Home Screen"/>
        </figure>
        
        <figure>
        <img className="img-shadow" src={Places} alt="Places Screen"/>
        </figure>

        <figure>
          <img className="img-shadow" src={Description} alt="Description Screen"/>
        </figure>
          
        <figure>
          <img className="img-shadow" src={Matchmaking} alt="Matchmaking Screen"/>
        </figure>

        <figure className="white-bg" style={{textAlign:"center"}}>
        <h1>5. Testing</h1>
        <p>Adobe XD Flow Preview</p>
        <p>You can play the video below or you can <a href='https://xd.adobe.com/view/4c46791d-eb46-4117-62f5-36d6a8c54d7a-3a77/' target='blank'>Interact with the prototype</a></p>
          <video className="img-shadow " src={Prototype}  autoplay="" loop="" alt="Prototype Video" controls />
        </figure>

        <figure className='white-bg'>
        <h1>Testing Learning Outcomes</h1>
        <ul>
          <li>Users need to see where to find people to socialize in person. </li>
          <li>Users must be able to socialize in groups or more.</li>
          <li>Users must be able to find people other than their know circle.</li>
          <li>There should be less virtual way of communication. Most of the information must delivered when people interact in person. (Bad ex : SnapChat Stories)</li>

        </ul>
        </figure>

       

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#283048" direction="right" to="/aws-static-website/">
            <div className="parent">
              <div className="child bg-aws"><h2><span>&laquo;</span> Prev</h2></div>
            </div>
          </AniLink>

          <AniLink cover bg="#283048" to="/centennial-experience/">
            <div className="parent">
              <div className="child bg-centennial"><h2>Next <span>&raquo;</span></h2></div>
            </div>
          </AniLink>

        </div>
        
      </footer>

    </main>

  </Layout>
)

export default SocialedPage
