import './about.css';

function About() {
    return (
        <div className = "about-page">
            <div className = "about-main">
                <div className = "about-main-flex">
                    <div className = "about-main-introduction">
                        <div className = "about-main-texts-image-flex">
                            <div className = "about-image-div">
                                <img className = "janny-image blue" src = "../../images/img_JannyCircle.png" alt = "JannyCircle"></img>
                            </div>
                            <div className = "about-texts-flex">            
                                <div className = "about-logo-div">
                                    <img src = "../../images/img_JannyLogo(1).png" alt = "aboutLogo" id = "about-logo-image"></img>
                                </div>
                                <div className = "about-description-div">
                                    <h3 className = "about-description">Estou aqui para divertir o seu servidor e engajar sua comunidade!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;