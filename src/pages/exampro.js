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


const ExamproPage = () => (
  <Layout>
    <SEO title="ExamPro.co" />
    
    <main className="project">

      <section className="project__description">
      

        <h1>ExamPro.co</h1>
        <h2>Project Summary</h2>
        <p>
        Exampro.co is an e-learning company that provides fast and easy cloud training. I was assigned to improve their <b>UX process</b> that is related to <b>UX research (Empathize)</b> and had to <b>improve the current user flows</b> which required me to obtain relevant feedback and suggestions from customers. 
        </p>
        <h2>Problem</h2>
        <p>There was a <b>disconnect of information</b> between the <b>customers and the team</b> (developers, design and stakeholders). The team needed to better <b>understand the user</b> so that they can improve their experience before the user reaches support with frustration. Surveys and customer support are always a time consuming process for the customer. We require a <b>quick and easy</b> way for the users to <b>express themselves</b> so that we can <b>improve the UX process.</b></p>

        <h2>Solution</h2>

        <p>The <b>customers are also stakeholders</b> so I obtained my research by creating a <a href='https://discord.gg/rTkejj4' target="blank">discord community</a> for the users where they could <b>publicly express and collaborate</b> with other cloud learners, developers and <b>ExamPro team</b>. The users expressed directly about any issues or opinions and got into discussion with the ExamPro team. The users would also solve other user’s issues if they had faced it themselves. </p>
        
        <h2>Achievements</h2>
        <ol>
            <li>Identified & reported over <b>250+ Ux issues/bugs</b> on Github with the help of the ExamPro community on discord and HotJar behaviour analytics. </li>
            <li>Obtained over <b>500+ users</b> on <a href='https://discord.gg/rTkejj4' target='blank'>ExamPro discord channel</a> who give constant feedback and report bugs they identify. <b>Rewarded users</b> as <b>community moderators</b> when they contributed. </li>
            <li><a href='https://github.com/ExamProCo/aws-xd-ui-kit' target='blank'>Over 20, stars on github</a> for creating an <b>aws ui components kit on adobe XD</b> (Followed by adobe employee)</li>
            <li><b>Over 1000 views for my first tech</b> talk about <a href='https://youtu.be/XlGw3iNBccc' target='blank'>A/B testing on AWS for UX Engineers (Youtube Link).</a></li>
            <li>Experience manager for over <b>800+ users</b> that joined for <a href='https://www.linkedin.com/groups/13884435/' target="blank">#100daysofcloud LinkedIN group</a> which drastically improved the course completion rate (KPI) and resulted in more engagement.</li>
        </ol>
        
        <h2>My Role</h2>
        <ol>
            <li>UX Designer (Personas, User flows, <a href='https://www.nngroup.com/articles/ten-usability-heuristics/' target="blank">10 Usability Heuristics</a>, User interviews)</li>
            <li>UI Designer (Adobe XD, UI components, <a href='https://github.com/ExamProCo/aws-xd-ui-kit'target="blank">Open source AWS UI components kit)</a></li>
            <li>UX Engineer (HTML, CSS, JS, Github and AWS A/B testing)</li>
        </ol>

        <h1>Project Scope</h1>
        <ol>
          <li>Empathizing The User</li>
          <li>Defining Standpoint</li>
          <li>Ideate</li>
          <li>Prototype</li>
          <li>Testing Learning Outcomes</li>
        </ol>
      </section>
      

      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

      

        <figure className='white-bg'>
        <h1>1. Empathizing The User</h1>
        <p>After several interviews with some <b>personas</b> such as <b>students and professionals</b> we found that when it comes to learning, users remember the knowledge by <b>testing themselves by learning in groups, study partners and with experts</b>. This gives them a confidence along with <b>long term knowledge</b> and a boost to complete their studies.</p>
        <iframe title="Lonliness Video"  src="https://www.youtube.com/embed/VJbKXmujI00?start=98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </figure>

        <figure className='white-bg'>
        <h1>Empathize (Learning Outcomes)</h1>
        <ul>
          <li>Users require to <b>test themselves</b> with groups, study partners and experts to enhance their <b>long term knowledge</b></li>
          <li>Information is <b>retained better</b> when <b>studying in groups</b> than studying alone</li>
          <li>Users need to identify their <b>information gaps</b> by discussing with other learners or experts</li>
          
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

export default ExamproPage
