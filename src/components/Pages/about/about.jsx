import CreateAboutDetails from './CreateAboutDetails';
import './about.scss';
import config from '../../../config.json';
import CreateAboutMains from './CreateAboutMains';

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
                                        <img src = "images/img_aboutLogo.png" alt = "about-logo" id = "about-logo-image"></img>
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
                        <div className = "about-divs reveal-bottom">
                            <div className = "about-board">
                                <div className = "about-texts-div">
                                    <div className = "about-title">
                                        <h1 className = "font-color-white">O que eu sou?</h1>
                                    </div>
                                    <div className = "about-description-divs">
                                        <p id = "about-description">Sou um bot de entreterimento desenvolvido para o aplicativo Discord, com o intuito de entreter sua comunidade e engajar seus membros!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "about-divs reveal-bottom">
                            <div className = "about-board">
                                <div className = "about-texts-div">
                                    <div className = "about-title">
                                        <h1 className = "font-color-white">O que posso fazer?</h1>
                                    </div>
                                    <div className = "about-description-divs">
                                        <p id = "about-description">Sou focado em moderação, diversão, interações de usuários, utilidades gerais, edições de imagens e gifs, pesquisas, economia e perfis sociais. Meu objeto é auxiliar no entretenimento de seus usuários, além de auxiliar na administração de servidores. E para mostrar do que sou capaz, confira cada uma das minhas categorias de comando abaixo:</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CreateAboutMains/>
                </div>
            </div>
        </div>
    )
}

export default About;