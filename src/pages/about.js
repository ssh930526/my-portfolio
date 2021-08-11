import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { StyledAbout  } from "../styles/styled-components"

const  About = (props) => (
    <StyledAbout>
    <Layout>
        <Head page="About" />
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Indie+Flower&family=PT+Sans+Narrow&family=Roboto:ital,wght@1,900&family=Teko:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
        <h1 className="about">About Me</h1>
        <div className="profileImg">
          <img src="/images/profile.png" alt="profile-image" />
        </div>
        <p className="intro">
            - Hi there! I'm Sihui, a full-stack developer Located in Orlando, FL.
         <br />
        </p>
        <p className="introduce">My strong passion for developing is unmatched. I love to slove problems, design and code with challenging needs. You can consider me as a hardworking & friendly individual, Searching for a challenging new role where skills and knowledge can be applied. Thanks for reading my profile.
        </p>
        
         <br />
         <p className="skill">Languages</p>
         <p className="mySkill">JavaScrip. Python.  HTML. CSS. </p>
         <p className="skill">Libraries/Freameworks</p>
         <p className="mySkill">ReactJS. NodeJS. ExpressJS. GatsbyJS. jQuery.Django. Bootstrap.  </p>
         <p className="skill">Other</p>
         <p className="mySkill">OAuth. MongoDB. Firebase. AWS. PostgreSQL. GitHub. VS Code.</p>
        <div className="contact">
            <p>📧 Email: sihui.shen@yahoo.com </p>
            <p>☎️ Phone: 347-827-8173</p>
            <p><a href="https://www.linkedin.com/in/sihui-shen-620592204/" ><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /> </a> </p>
        </div>
    </Layout>
    </StyledAbout>
)


export default About