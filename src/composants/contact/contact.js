import React from 'react'
import './contact.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Map from '../google-map/map';
import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function validateForm() {
        return name.length > 0 && email.length > 0 && message.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!validateForm()) {
            alert("Veuillez remplir tous les champs du formulaire.");
            return;
        } else {
            alert("Votre message à bien été envoyé !");
            setName("");
            setEmail("");
            setMessage("");
        }
        // Envoyer le formulaire...
    }
    return (
        <div className="contact-all">
            <div className="contact">
                <div className="contact-header">
                    <h1>Me contacter</h1>
                    <p className="contact-presentation">Envoyer un mail pour plus d'informations.</p>
                </div>

                <div className="sendMessage">
                    <form className="formulaire" onSubmit={handleSubmit}>
                        <div className="input-form">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="input-form">
                            <input
                                type="text"
                                name="email"
                                placeholder="Votre mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-form">
                            <input
                                type="text"
                                name="message"
                                placeholder="Votre message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button className="btnContact" type="submit">
                            Envoyer <AiOutlineArrowRight className="arrow" />
                        </button>
                    </form>
                </div>


            </div>
            <Map />
        </div>
    )
}

export default Contact