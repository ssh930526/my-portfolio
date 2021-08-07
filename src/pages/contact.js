import React from "react"
import Layout from "../components/layout"


const Contact = () => {
    return (
        <Layout>
            <h1>Contact</h1>
            <form data-netlify="ture">
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
            </form>
        </Layout>
    )
}

export default Contact