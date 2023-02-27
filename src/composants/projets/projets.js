import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import './projets.css'

function projets() {
    const projects = [
        {
            id: 1,
            image: "./image-portfolio/the-moutain.png",
            title: "The Mountain",
            description: "bonjour",
        },
        {
            id: 2,
            image: "./image-portfolio/one-million.png",
            title: "One Million",
            description: "Asta Luego"
        },
        
    ]
    return (
        <Carousel autoPlay interval={5000} infiniteLoop showStatus={false}>
            {projects.map(slider =>
                <div key={slider.id}>
                    <img src={slider.image} alt="title" />
                    <div className="overlay">
                        <h2 className="project-title">{slider.title}</h2>
                        <p className="project-paragraphe">{slider.description}</p>
                    </div>
                </div>

            )}
        </Carousel>

    )
}

export default projets