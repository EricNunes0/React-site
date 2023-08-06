import CreateIntroductionCategories from './CreateIntroductionCategories';
import './Index.scss';

function Index() {
    const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=911002921594925056&permissions=1533236608247&scope=bot";
    return (
        <div className = "main-div">
            <div className = "main-div-background">
                <div className = "main-div-container">
                    <div className = "main-div-container-divs" id = "main-div-container-image">
                        <div id = "janny-image-div">
                            <img id = "janny-image" src = "../images/img_JannyCircle.png" alt = "Janny"></img>
                        </div>
                    </div>
                    <div className = "main-div-container-divs" id = "main-div-container-infos">
                        <div className = "main-div-container-informations" id = "main-div-container-logo">
                            <img id = "janny-logo-image" src = "https://i.imgur.com/gkMNnA5.png" alt = "Janny Logo"></img>
                        </div>
                        <div className = "main-div-container-informations" id = "main-div-container-buttons">
                            <div className = "main-div-buttons" id = "invite-button-div">
                                <a href = {inviteLink} target = "_blank" rel = "noreferrer">
                                    <button type = "button" className = "main-buttons" id = "invite-button">Adicionar</button>
                                </a>
                            </div>
                            <div className = "main-div-buttons" id = "support-button-div">
                                <a href = "https://discord.gg/egnNbVvnqx" target = "_blank" rel = "noreferrer">
                                    <button type = "button" className = "main-buttons" id = "support-button">Suporte</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src = "https://i.imgur.com/t9PB6Dv.png" alt = "arrow" id = "arrow"></img>
                </div>
            </div>
            <div className = "introduction-main-div">
                <div className = "introduction-texts-div">
                    <div className = "intro-divs">
                        <div id = "introduction-div">
                            <div className = "introduction-texts-board">
                                <div className = "reveal-bottom" id = "introduction-main-text-div">
                                    <div id = "introduction-title-div">
                                        <h2 className = "introduction-texts" id = "introduction-title">Olá, eu sou o <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                    </div>
                                    <div id = "introduction-text-div">
                                        <p className = "introduction-texts" id = "introduction-text">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div id = "introduction-aboutme-div">
                            <div className = "introduction-texts-board">
                                <div className = "reveal-bottom" id = "introduction-main-aboutme-text-div">
                                    <div id = "introduction-aboutme-title-div">
                                        <h2 className = "introduction-texts" id = "introduction-title">Quem sou eu?</h2>
                                    </div>
                                    <div id = "introduction-aboutme-text-div">
                                        <p className = "introduction-texts" id = "introduction-text">Sou um bot simples criado para o Discord, e estou aqui para lhe ajudar a entreter a sua comunidade. Inicialmente, eu fui criado por <a id = "introduction-aboutme-username" href = "" target = "_blank">Eric2605</a> apenas para divertir um grupo de amigos do meu criador, e nem tinha planos de me tornar o bot que sou hoje. Porém, o projeto acabou expandindo com o tempo, e hoje já estou em mais de 200 servidores! Meu objetivo é ser reconhecido pela plataforma, trazendo alegria para as pessoas!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div className = "introduction-texts-board">
                            <div className = "reveal-bottom" id = "introduction-main-commands-text-div">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-commands-title">Meus comandos</h2>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text">Atualmente eu possuo mais de 160 comandos, e estou sempre recebendo atualizações e novas funcionalidades. Como são muitos comandos, listar todos eles aqui seria bem chato, não? Por isso, vou facilitar sua vida e listar as categorias em que eles são divididos, confira:</p>
                                </div>
                            </div>
                            <div className = "introduction-categories">
                                <CreateIntroductionCategories/>
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div id = "introduction-invite-div">
                            <div className = "introduction-texts-board">
                                <div className = "reveal-bottom" id = "introduction-main-invite-text-div">
                                    <div>
                                        <h2 className = "introduction-texts" id = "introduction-title">Me adicione!</h2>
                                    </div>
                                    <div>
                                        <p className = "introduction-texts" id = "introduction-text">Ficou curioso para saber como eu funciono? Então basta clicar no botão abaixo para me adicionar no servidor de sua escolha!<br></br>Obs: Eu precisarei de permissões específicas para executar os comandos da categoria de Moderação. No botão abaixo está o link de convite com todas as permissões necessárias para que eu funcione corretamente!</p>
                                    </div>
                                    <div>
                                        <a className = "introduction-invite-button" href = {inviteLink}>
                                            <button className = "introduction-buttons" id = "index-invite-button">Adicionar</button>
                                        </a>
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