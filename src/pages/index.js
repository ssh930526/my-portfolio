import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { StyledIndex  } from "../styles/styled-components"


const IndexPage = () => {
  return (
    <StyledIndex>
    <Layout>
      <Head page="Home" />
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Indie+Flower&family=PT+Sans+Narrow&family=Roboto:ital,wght@1,900&family=Teko:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
      <h1 className="home">Let me Introduce Myself !</h1>
      <img className="index" src="https://t4.ftcdn.net/jpg/04/39/15/99/360_F_439159973_sHs6X9sPvUaqD5lCUyegumJROSoLw0Qf.jpg"></img>
    </Layout>
    </StyledIndex>
  )
}
export default IndexPage
