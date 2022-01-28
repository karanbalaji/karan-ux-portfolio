import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



import "../components/pages.scss"
import Logo from "../images/portfolios/exampro/logo.svg"
import PersonaStudent from "../images/portfolios/exampro/personas/student.png"
import PersonaWorker from "../images/portfolios/exampro/personas/working-professional.png"
import AWStech from "../images/portfolios/exampro/awstech.png"
import Maslow from "../images/portfolios/exampro/personas/maslow.png"


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
        Exampro.co is an e-learning company that provides fast and easy cloud training. I was assigned to improve their <b>UX process</b> that is related to <b>UX research (Empathize)</b> and had to <b>improve the current user flows.</b> 
        </p>
        <h2>Problem</h2>
        <ol>
          <li>There was a <b>disconnect of information</b> between the <b>customers and the team</b> (developers, designers, and stakeholders).</li>
          <li>The team needed to better <b>understand the user</b> so that they can improve their experience.</li>
        </ol>
        <h2>Solution</h2>

        <p>The <b>customers are also stakeholders</b> so I obtained my research by creating a <a href='https://discord.gg/rTkejj4' target="blank">discord community</a> for the users where they could <b>publicly express and collaborate</b> with other cloud learners,  developers, and the ExamPro team. </p>
        
        <h2>Achievements</h2>
        <ol>
            <li>Identified & reported over <b>250+ Ux issues/bugs</b> on Github with the help of the ExamPro community on discord and HotJar behavior analytics. </li>
            <li>Obtained over <b>500+ users</b> on <a href='https://discord.gg/rTkejj4' target='blank'>ExamPro discord channel</a> who give constant feedback and report bugs they identify. <b>Rewarded users</b> as <b>community moderators</b> when they contributed. </li>
            <li><a href='https://github.com/ExamProCo/aws-xd-ui-kit' target='blank'>Over 20, stars on Github</a> for creating an <b>AWS UI components kit on adobe XD</b> (Followed by adobe employee).</li>
            <li><b>Over 1000 views for my first tech</b> talk about <a href='https://youtu.be/XlGw3iNBccc' target='blank'>A/B testing on AWS for UX Engineers (Youtube Link).</a></li>
            <li>Experience manager for over <b>800+ users</b> that joined for <a href='https://www.linkedin.com/groups/13884435/' target="blank">#100daysofcloud LinkedIn group</a> which drastically improved the course completion rate (KPI) and resulted in more engagement.</li>
        </ol>
        
        <h2>My Role</h2>
        <ol>
            <li>UX Designer (<a href='https://lawsofux.com/' target="blank">UX laws</a>, Personas, User flows, <a href='https://www.nngroup.com/articles/ten-usability-heuristics/' target="blank">10 Usability Heuristics</a>, User interviews)</li>
            <li>UI Designer (Adobe XD, UI components, <a href='https://github.com/ExamProCo/aws-xd-ui-kit'target="blank">Created AWS components kit)</a></li>
            <li>UX Engineer (HTML, CSS, JS, Github, Accessibility optimization and A/B testing on AWS)</li>
        </ol>

        <h1>Project Scope</h1>
        <ol>
          <li>Empathizing The User</li>
          <li>Defining Standpoint</li>
          <li>Ideating</li>
          <li>Prototyping</li>
          <li>Testing Learning Outcomes</li>
        </ol>
      </section>
      

      
      <section className="project__logo"><Logo /></section>

      <article className="project__content">

      

        <figure className='white-bg'>
        <h1>1. Empathizing the user</h1>
        <ul>
          <li>After several interviews we found that when it comes to learning, users remember the knowledge by <b>testing themselves by learning in groups, study partners and with experts</b>.</li>
          <li>This gives them some confidence along with <b>long-term knowledge</b> and a boost to complete their studies.</li>
        </ul>
        <p> </p>
        <iframe title="Scientifically Proven Best Ways to Study Video"  src="https://www.youtube.com/embed/VJbKXmujI00?start=98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h1>Empathize (Learning Outcomes)</h1>
        <ul>
          <li>Users require to <b>test themselves</b> with groups, study partners, and experts to enhance their <b>long term knowledge.</b></li>
          <li>Information is <b>retained better</b> when <b>studying in groups</b> than studying alone.</li>
          <li>Users need to identify their <b>information gaps</b> by discussing with other learners or experts.</li>
          
        </ul>
        <img className="img-shadow" src={PersonaStudent} alt="Student Persona image"/>
        <br/> <br/> <br/>
        <img className="img-shadow" src={PersonaWorker} alt="Worker Persona image"/>
        </figure>

        <figure className='white-bg'>
        <h1>2. Defining a standpoint.</h1>
        <ul>
          <li>The user's goal is to learn and gain knowledge.</li>
          <li>To achieve that <b>long-term knowledge</b> we require the <b>users to have a stake</b> in the discussion, contribution, learning and be able to test themselves with experts (ExamPro Team), cloud learners, and study groups.</li>
        </ul>
        </figure>

        <figure className='white-bg'>
        <h1>3. Ideate.</h1>
        <ul>
          <li>Users need a community to build the <b>long-term knowledge.</b> </li>
          <li>Users must be able to <b>test themselves to identify information gaps</b> with experts, study groups, and the ExamPro team.</li>
          <li>Users must feel <b>they belong to the product</b> they are using and confess to the ExamPro team for any improvements through all possible channels.(Ex: Discord).</li>
          

        </ul>
        

        
        <h1>Ideating relevant functionality.</h1>
        <p>Based on Maslow's Theory Of Hierarchy Need we organize user's need through each phase.</p>
          <img className="img-shadow" src={Maslow} alt="Functionality Based on Maslow"/>
        </figure>

        <figure className='white-bg'>
        <h1>4. Prototype.</h1>
        <ul>
        <li>I improved several UI's such as onboarding, course dashboard, etc that were reported by the users on discord community while they were on their study journey. </li>
        <li>I then procedded to make fixes of certain UI components using Adobe XD.</li>
        <li>This is the final product demo after over 200 UX fixes found by users using discord and HotJar analytics. </li>
        </ul>
        
        <iframe title="Demo of ExamPro Platform"  src="https://www.youtube.com/embed/CLR8Mbh7kaQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </figure>
      
        <figure className="white-bg">
        <h1>5. Testing.</h1>
        <ul>
          <li>We used <a href='https://www.hotjar.com/' target="blank">HotJar behaviour analytics</a> to understand the user and conducted A/B testing using AWS.</li>
        <li>Collaborated with developers on implementing A/B testing using lambda edge function. </li>
            <li>Solved over 100 CSS breakpoint issues for different screen sizes using HotJar behavioural analytics.</li>
          <li>Identified UI issues such as text alignment, image sizing etc. for different devices that were related to CSS for several pages.</li>
          <li>Resolved registration issues on mobile vs web that was caused by case sensitive input fields. </li>
        </ul>
        <iframe title="A/B Testing on AWS for UX Engineers"  src="https://www.youtube.com/embed/XlGw3iNBccc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        </figure>

        <figure className="white-bg">
        <h1>Tech Talks and events</h1>  
        <p>First AWS reInvent 2019 in Toronto <a href='https://www.linkedin.com/feed/update/urn:li:activity:6633923949883469825/'target="blank">(LinkedIn)</a></p>  
        <img className="img-shadow" src={AWStech} alt="AWS Reinvent meetup"/>
        </figure>
        
        
        
       

      </article>

      <footer className="project__footer">

        <div className="project__footer--gallery">

          <AniLink cover bg="#283048" direction="right" to="/aws-static-website/">
            <div className="parent">
              <div className="child bg-aws"><h2><span>&laquo;</span> Prev</h2></div>
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

export default ExamproPage
