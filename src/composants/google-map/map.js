import React from 'react'
import './map.css'


function map() {

    return (
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.427181914455!2d4.876697015866725!3d45.76262852150088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c02cb81ed7ab%3A0x21de2ceed025837d!2s85%20Cr%20Tolsto%C3%AF%2C%2069100%20Villeurbanne!5e0!3m2!1sfr!2sfr!4v1676973630077!5m2!1sfr!2sfr"
                width="750"
                height="710"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="map-resp"
            ></iframe>
        </div>
    )
}

export default map