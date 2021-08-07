import React, { useState } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { navigate } from "gatsby-link"


const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    })

    const encode = (data) => {
        return Object.keys(data).map(key => (
            `${encodeURIComponent(key)}${encodeURIComponent(data[key])}`
        )).join('&')
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
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
            <form name="contact"  data-netlify="ture" onSubmit={handleSubmit}>
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
    )
}

export default Contact