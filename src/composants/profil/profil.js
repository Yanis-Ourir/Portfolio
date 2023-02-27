import React from 'react';
import './profil.css';
import CV from '../../OURIR_Yanis_CV.pdf';
import profilPic from '../../assets/profil-picture.jpg';

export default function profil() {
    return (
        <div>
            <div className="profil-details">
                <div className="profil-card">
                    <h1 className="title">
                        <span className="letter-jello">O</span>
                        <span className="letter-jello">U</span>
                        <span className="letter-jello">R</span>
                        <span className="letter-jello">I</span>
                        <span className="letter-jello">R</span>
                        &nbsp;
                        <span className="letter-jello">Y</span>
                        <span className="letter-jello">a</span>
                        <span className="letter-jello">n</span>
                        <span className="letter-jello">i</span>
                        <span className="letter-jello">s</span>
                    </h1>
                    <img src={profilPic} className="profil-picture" alt="profil-pic"></img>
                    <p className="activity">Développeur Web Junior</p>
                    <p className="description">Je suis un développeur web junior passionné par le numérique,
                        <br />et mon objectif est de créer des expériences en ligne innovantes et convaincantes. <br />
                        Avec un fort désir de travailler dans le domaine du web,
                        <br />j'ai hâte de contribuer à des projets passionnants et de continuer à développer mes compétences pour y parvenir.
                    </p>
                    <a href={CV} dowload="ourir-yanis-cv.pdf" className="cv-button">Télécharger mon cv</a>

                    <div className="scroll-down">
                        <span>scroll down ></span>
                        <span>scroll down ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
