import React from 'react'
import './portfolio.css'
import { Carousel } from 'react-responsive-carousel'
import { useState, useEffect } from 'react'





function Portfolio() {
    const portfolios = [
        {
            id: 1,
            first_screen: require("../../assets/the-mountain.png"),
            second_screen: require("../../assets/the-mountain-2.png"),
            third_screen: require("../../assets/the-mountain-3.png"),
            title: "The Mountain",
            description: "Projet HTML/CSS Bootstrap, utilisation de grid et des medias queries pour le responsive",
            link: "http://yanis-the-mountain.projets.garage404.com/"
        },
        {
            id: 2,
            first_screen: require("../../assets/one-million.png"),
            second_screen: require("../../assets/one-million-2.png"),
            third_screen: require("../../assets/one-million-3.png"),
            title: "One Million",
            description: "Premier projet front HTML/CSS",
            link: "https://yanis-one-million.projets.garage404.com/"
        },
        {
            id: 3,
            first_screen: require("../../assets/mini-chat.png"),
            second_screen: require("../../assets/mini-chat-2.png"),
            third_screen: require("../../assets/mini-chat-3.png"),
            title: "Mini-chat",
            description: "Petit projet en PHP et mySQL pour manipuler la base de donnée et les utilisateurs",
            link: "https://yanis-mini-chat.projets.garage404.com/"
        },
        {
            id: 4,
            first_screen: require("../../assets/lecteur-audio.png"),
            second_screen: require("../../assets/lecteur-audio-2.png"),
            third_screen: require("../../assets/lecteur-audio-3.png"),
            title: "Lecteur-audio",
            description: "Projet de création d'un lecteur de musique qui m'a demandé d'utiliser PHP Javascript Bootstrap mySQL. ",
            link: "https://yanis-lecteur-audio.projets.garage404.com/"
        },
        {
            id: 5,
            title: "e-Sport+",
            first_screen: require("../../assets/esport.png"),
            second_screen: require("../../assets/esport-2.png"),
            third_screen: require("../../assets/esport-3.png"),
            description: "Projet web Wordpress. Pureplayer réalisé en groupe.",
            link: "https://esportfr.go.yj.fr/"
        }
    ]

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 874) {
                setIsAnimated(true);
            } else {
                setIsAnimated(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="portfolio">


            {portfolios.map((list, index) =>
                <a href={list.link}>
                    <div className={`portfolio-card ${isAnimated ? 'slide-top' : ''}`} key={list.id} style={{ animationDelay: isAnimated ? `${(index + 1) * 200}ms` : '0s' }}>
                        <div className="portfolio-image">
                            <Carousel autoPlay infiniteLoop showIndicators={false} showStatus={false} showThumbs={false}>

                                <img src={list.first_screen} key={list.id} className="portfolio-img" alt={list.title}></img>
                                <img src={list.second_screen} key={list.id} className="portfolio-img" alt={list.title}></img>
                                <img src={list.third_screen} key={list.id} className="portfolio-img" alt={list.title}></img>

                            </Carousel>

                        </div>

                        <div className="portfolio-desc">
                            <h4>{list.title}</h4>
                            <p>{list.description}</p>
                        </div>

                        <div className="view-details">
                            <p>Voir projet</p>
                        </div>
                    </div>
                </a>
            )}

        </div>
    )
}

export default Portfolio