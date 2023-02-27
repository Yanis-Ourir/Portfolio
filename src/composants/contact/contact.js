import React from 'react'
import './contact.css'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Map from '../google-map/map';

function contact() {
    function sendMail() {
        alert("Votre mail a bien été envoyé !");
    }

    return (
        <div className="contact-all">
            <div className="contact">
                <div className="contact-header">
                    <h1>Me contacter</h1>
                    <p className="contact-presentation">Envoyer un mail pour plus d'informations.</p>
                </div>

                <div className="sendMessage">
                    <form className="formulaire" action="localhost:3000">

                        <div className="input-form">
                            <input type="text" name="name" placeholder="Votre nom" />
                        </div>



                        <div className="input-form">
                            <input type="text" name="mail" placeholder="Votre mail" />
                        </div>



                        <div className="input-form">
                            <input type="text" name="message" placeholder="Votre message" />
                        </div>

                        <button className="btnContact" type="submit" onClick={() => sendMail()}>Envoyer<AiOutlineArrowRight className="arrow" /></button>
                    </form>


                </div>


            </div>
            <Map />
        </div>
    )
}

export default contact