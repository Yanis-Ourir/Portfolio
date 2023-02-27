import React from 'react'
import './skill.css'
import { TfiHtml5 } from 'react-icons/tfi'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiSymfony } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiSwift } from 'react-icons/si'
import { FaSwift } from 'react-icons/fa'
import { FaWordpress } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'


function skill() {
    const skillsFrontEnd = [
        {
            id: 1,
            logo: <TfiHtml5 />,
            name: "HTML",
            level: "Avancé",
            color: "#E44D26",
            bgColor: "white",
        },
        {
            id: 2,
            logo: <SiCss3 />,
            name: "CSS",
            level: "Avancé",
            color: "#2465F1",
            bgColor: "white",

        },
        {
            id: 3,
            logo: <SiJavascript />,
            name: "JavaScript",
            level: "Intermédiaire",
            color: "#F7E018",
        },
        {
            id: 4,
            logo: <SiBootstrap />,
            name: "Bootstrap",
            level: "Avancé",
            color: "#8C0BFC",
            bgColor: "white",
        },
        {
            id: 5,
            logo: <SiReact />,
            name: "React",
            level: "En apprentissage",
            color: "#61DBFB",
        },
        {
            id: 6,
            logo: <SiTailwindcss />,
            name: "Tailwind CSS",
            level: "En apprentissage",
            color: "#38BDF8",
        },
        {
            id: 7,
            logo: <FaSwift />,
            name: "Swift UI",
            level: "Intermédiaire",
            color: "#0B53DC"
        },
        {
            id: 8,
            logo: <FaWordpress />,
            name: "Wordpress",
            level: "Avancé",
            color: "#0071A7"

        }

    ]

    const skillsBackEnd = [
        {
            id: 1,
            logo: <SiPhp />,
            name: "PHP",
            level: "Intermédiaire",
            color: "#787CB5",
        },
        {
            id: 2,
            logo: <SiSymfony />,
            name: "Symfony",
            level: "En apprentissage",
            color: "#000000",
            bgColor: "white",
        },
        {
            id: 3,
            logo: <SiMysql />,
            name: "MySQL",
            level: "Intermédiaire",
            color: "#F77A3E",
            bgColor: "white",
        },
        {
            id: 4,
            logo: <SiSwift />,
            name: "Swift",
            level: "Intermédiaire",
            color: "#FD2A21",

        }
    ]
    return (
        <section className="skills">

            <h1 className="title">
                <span className="letter-jello">M</span>
                <span className="letter-jello">e</span>
                <span className="letter-jello">s</span>
                &nbsp;
                <span className="letter-jello">c</span>
                <span className="letter-jello">o</span>
                <span className="letter-jello">m</span>
                <span className="letter-jello">p</span>
                <span className="letter-jello">é</span>
                <span className="letter-jello">t</span>
                <span className="letter-jello">e</span>
                <span className="letter-jello">n</span>
                <span className="letter-jello">c</span>
                <span className="letter-jello">e</span>
                <span className="letter-jello">s</span>
            </h1>

            <div className="experience">

                <div className="frontend">
                    <h3>Frontend</h3>
                    <div className="experience-content">
                        {skillsFrontEnd.map(list =>
                            <>
                                <div className="skills-blocs" key={list.id}>
                                    <p className="language-logo" style={{ color: list.color }}>{list.logo}</p>
                                    <div className="skills-p" >
                                        <h4 key={list.id}>{list.name}</h4>

                                        <p>{list.level}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                </div>

                <div className="backend">
                    <h3>Backend</h3>
                    <div className="experience-content">
                        {skillsBackEnd.map(list =>
                            <>
                                <div className="skills-blocs" key={list.id}>
                                    <p className="language-logo" style={{ color: list.color }}>{list.logo}</p>
                                    <div className="skills-p" key={list.id}>
                                        <h4 key={list.id}>{list.name}</h4>

                                        <p>{list.level}</p>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default skill