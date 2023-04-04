import './Index.css';

function Index() {
    const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=911002921594925056&permissions=1533236608247&scope=bot";
    return (
        <div className = "main-div">
            <div className = "main-div-background">
                <div className = "main-div-container">
                    <div className = "main-div-container-divs" id = "main-div-container-image">
                        <img id = "janny-image" src = "../images/img_JannyCircle.png" alt = "Janny"></img>
                    </div>
                    <div className = "main-div-container-divs" id = "main-div-container-infos">
                        <div className = "main-div-container-informations" id = "main-div-container-logo">
                            <img id = "janny-logo-image" src = "../images/img_JannyLogo.png" alt = "Janny Logo"></img>
                        </div>
                        <div className = "main-div-container-informations" id = "main-div-container-buttons">
                            <div className = "main-div-buttons" id = "invite-button-div">
                                <a href = {inviteLink} target = "_blank" rel = "noreferrer">
                                    <button type = "button" className = "main-buttons" id = "invite-button">ME ADICIONAR</button>
                                </a>
                            </div>
                            <div className = "main-div-buttons" id = "support-button-div">
                                <a href = "https://discord.gg/egnNbVvnqx" target = "_blank" rel = "noreferrer">
                                    <button type = "button" className = "main-buttons" id = "support-button">SUPORTE</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = "../../images/img_arrow(0).png" alt = "arrow" id = "arrow"></img>
                </div>
            </div>
            <div className = "introduction-main-div">
                <div className = "panels-main-flex">
                    <div className = "panels-panels">
                        <div className = "introduction-texts-div">
                            <div className = "introduction-texts-board">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-title">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                    <div className = "introduction-title-lines">
                                        <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;