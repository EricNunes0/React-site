import './about.css';

function About() {
    return (
        <div className = "about-page">
            <div className = "about-main">
                <div className = "about-main-flex">
                    <div className = "about-main-introduction">
                        <div className = "about-main-texts-image-flex">
                            <div className = "about-texts-flex">            
                                <div className = "about-logo-div">
                                    <img src = "https://i.imgur.com/9MMJ9DE.png" alt = "aboutLogo" id = "about-logo-image"></img>
                                </div>
                                <div className = "about-description-div">
                                    <h3 className = "about-description">Estou aqui para divertir o seu servidor e engajar sua comunidade!</h3>
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