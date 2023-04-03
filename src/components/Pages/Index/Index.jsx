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
            <div className = "panels-main-div">
                <div className = "panels-main-flex">
                    <div className = "panels-lines-div">
                        <div className = "panels-lines-div">
                            <div className = "panels-lines">
                                <img className = "lines-images" src = "../../images/img_VerticalBar(0).png" alt = "Barra Vertical" data-anime = "reveal"></img>
                                <div className = "lines-div" id = "blue-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(0).png" alt = "MainToMod" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Moderação</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(1).png" alt = "mod-to-fun" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines-div" id = "yellow-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(1).png" alt = "ModToFun" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Diversão</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(2).png" alt = "Diversão" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines" id = "act-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(2).png" alt = "Ações" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Ações</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(3).png" alt = "FunToAct" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines" id = "green-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(3).png" alt = "Utilidades" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Utilidades</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(4).png" alt = "ActToUtil" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines" id = "orange-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(4).png" alt = "Photoshop" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Photoshop</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(5).png" alt = "UtilToPs" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines" id = "purple-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(5).png" alt = "Economia" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Economia</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(6).png" alt = "PsToEco" data-anime = "reveal"></img>
                                </div>
                                <div className = "lines" id = "pink-line">
                                    <div className = "lines-text-flex">
                                        <img src = "../../images/img_BarIcon(6).png" alt = "Social" className = "bar-icons" data-anime = "reveal"></img>
                                        <div className = "categories-titles-div">
                                            <h2 className = "panel-titles" data-anime = "reveal">Social</h2>
                                        </div>
                                    </div>
                                    <img className = "lines-images" src = "../../images/img_VerticalBar(7).png" alt = "EcoToSoc" data-anime = "reveal"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "panels-panels">
                        <div className = "introduction-texts-div">
                            <div className = "introduction-texts-board" data-anime = "reveal">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                    <div className = "introduction-title-lines">
                                        <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                </div>
                            </div>
                        </div>
                        <div className = "introduction-categories-div">
                            <div className = "introduction-categories-boards">
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className = "panels-main-flex">                     
                                    <div className = "introduction-categories-board" data-anime = "reveal">
                                        <div>
                                            <h2 className = "introduction-texts" id = "introduction-title" data-anime = "left">E aí, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                            <div className = "introduction-title-lines">
                                                <img id = "introduction-title-red-line" src = "../../images/img_Bar(0).png" alt = "red-line" data-anime = "right"></img>
                                            </div>
                                        </div>
                                        <div>
                                            <p className = "introduction-texts" id = "introduction-text" data-anime = "left">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                        </div>
                                    </div>
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