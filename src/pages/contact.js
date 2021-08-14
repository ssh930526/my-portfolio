import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"
import { StyledContact } from "../styles/styled-components"


const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const encode = (data) => {
        const {name, email, message} = data
        return `form-name=contact&name=${encodeURIComponent(formState.name)}&email=${encodeURIComponent(formState.email)}&message=${encodeURIComponent(formState.message)}`
    }

    const handleChnage = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/contact', {
            method: 'POST',
            header: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: encode(formState)
        })
        setFormState({
            name: "",
            email: "",
            message: "",
        })
        navigate('/')
    }
    return (
        <StyledContact>
            <Layout>
                <Head page="Contact" />
                <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&family=Indie+Flower&family=PT+Sans+Narrow&family=Roboto:ital,wght@1,900&family=Teko:wght@300&family=Ubuntu:wght@300&display=swap" rel="stylesheet"></link>
                <h1 className="contact">Welcome To Leave Message To Me </h1>
                <p></p>
                <form className="form" name="contact"  data-netlify="ture" onSubmit={handleSubmit}>
                    <input 
                        type="hidden"
                        name="form-name" 
                        value="contact" />
                    <label>
                        Name
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="First Name  Last Name"
                            onChange={handleChnage}
                            value={formState.name} />
                    </label>
                    <label>
                        Email
                        <input 
                            type="emial" 
                            name="email" 
                            placeholder="Email Address"
                            onChange={handleChnage}
                            value={formState.email} />
                    </label>
                    <label>
                        Message
                        <textarea 
                            name="message" 
                            placeholder="Hey waht's up"
                            onChange={handleChnage}
                            value={formState.message}>

                        </textarea>
                    </label>
                    <input type="submit" value="Contact Me" />
                </form>
            </Layout>
        </StyledContact>
    )
}

export default Contact 