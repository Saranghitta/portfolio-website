import React from "react";
import "../css/Contact.css";

export default function Contact () {
    return (
        <>
            <div className="contact-container" id="contact">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <fieldset>
                        <legend>CONTACT</legend>
                        <input type="hidden" name="access_key" value="eeda3fe3-e6e0-42a3-9fd3-b6a5b41d76a2"/>
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required/>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required/>
                        <label for="message">Message</label>
                        <textarea name="message" id="message" required></textarea>
                        <button type="submit">CONTACT</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}