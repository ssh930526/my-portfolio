import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"


const Contact = () => {
    return (
        <Layout>
            <Head page="Contact" />
            <h1>Contact</h1>
            <form name="contact" method="POST" data-netlify="ture">
                <input type="hidden"  name="form-name" value="contact" />
                <label>
                    Name
                    <input type="text" name="name" placeholder="First Name  Last Name" />
                </label>
                <label>
                    Email
                    <input type="emial" name="email" placeholder="Email Address" />
                </label>
                <label>
                    Message
                    <textarea name="message" placeholder="Hey waht's up">

                    </textarea>
                </label>
                <input type="submit" value="Contact Me" />
            </form>
        </Layout>
    )
}

export default Contact