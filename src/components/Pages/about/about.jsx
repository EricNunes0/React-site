import CreateAboutDetails from './CreateAboutDetails';
import './about.scss';
import config from '../../../config.json';

function About() {
    const inviteLink = config.inviteLink;
    return (
        <div className = "about-page">
            <div className = "about-main">
                <div className = "about-main-flex">
                    <div className = "about-main-introduction">
                        <div id = "about-main-flex">
                            <div id = "about-right-div">
                                <div className = "about-texts-flex">            
                                    <div className = "about-logo-div">
                                        <img src = "https://i.imgur.com/9MMJ9DE.png" alt = "about-logo" id = "about-logo-image"></img>
                                    </div>
                                </div>
                            </div>
                            <div id = "about-left-div">
                                <div id = "about-title-div">
                                    <h1 id = "about-title">Olá, eu sou o <span id = "about-title-span">Janny</span>!</h1>
                                </div>
                                <div id = "about-description-div">
                                    <p id = "about-description">Estou aqui para divertir o seu servidor e engajar sua comunidade!</p>
                                </div>
                                <CreateAboutDetails/>
                                <div id = "about-invite-button-div">
                                    <a id = "about-invite-button" href = {inviteLink} target = "_blank" rel="noreferrer">Adicionar</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className = "about-section">
                        <div className = "about-div">
                            <div className = "about-board">
                                <div className = "about-image-div">
                                    <img className = "janny-image blue" src = "../../images/img_JannyCircle.png" alt = "JannyCircle"></img>
                                </div>
                                <div className = "about-texts-div">
                                    <div className = "about-title">
                                        <h1 className = "font-color-white">Olá, eu sou o Janny!</h1>
                                    </div>
                                    <div className = "about-description">
                                        <p>Eu sou um bot multifuncionalidades desenvolvido para o Discord, com o intuito de entreter sua comunidade e engajar seus membros!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About;