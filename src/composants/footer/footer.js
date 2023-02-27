import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin, BsFillArrowUpCircleFill } from 'react-icons/bs'

function footer() {
    return (
        <div className="footer">
            <p className="p-footer">© Yanis OURIR</p>

            <div className="footer-logo">
                <a href="https://github.com/Yanis-Ourir" className="github"><BsGithub /></a>
                <BsLinkedin className="linkedin" />
            </div>

            <a href="#navbar" className="go-up"><BsFillArrowUpCircleFill /></a>

        </div>
    )
}

export default footer