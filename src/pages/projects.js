import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import data from "../data/projects.json"
// import { StaticImage } from "gatsby-plugin-image"


const Projects = () => {
    console.log(data)
  return (
    <Layout>
      <Head page="Projects" />
      <h1>Projects Page</h1>
      <section>
          {
              data.map((project, idx) => (
                <article key={idx}>
                        {/* <StaticImage src="../images/" alt={project.title} /> */}
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <a href={project.githubLink}>View On GitHub</a>
                    <br />
                    <a href={project.deployedLink}>View Deployed Project</a>
                </article>
              ))
          }
      </section>
    </Layout>
  )
}
export default Projects