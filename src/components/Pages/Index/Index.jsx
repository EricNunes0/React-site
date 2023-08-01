import './Index.css';

function Index() {
    const inviteLink = "https://discord.com/api/oauth2/authorize?client_id=911002921594925056&permissions=1533236608247&scope=bot";
    return (
        <div className = "main-div">
            <div className = "main-div-background">
                <div className = "main-div-container">
                    <div className = "main-div-container-divs" id = "main-div-container-image">
                        <img className = "janny-image red" src = "../images/img_JannyCircle.png" alt = "Janny"></img>
                    </div>
                    <div className = "main-div-container-divs" id = "main-div-container-infos">
                        <div className = "main-div-container-informations" id = "main-div-container-logo">
                            <img id = "janny-logo-image" src = "https://i.imgur.com/gkMNnA5.png" alt = "Janny Logo"></img>
                        </div>
                        <div className = "main-div-container-informations" id = "main-div-container-buttons">
                            <div className = "main-div-buttons" id = "invite-button-div">
                                <a href = {inviteLink} target = "_blank" rel = "noreferrer">
                                    <button type = "button" className = "main-buttons" id = "invite-button">ADICIONAR</button>
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
                    <img src = "https://i.imgur.com/t9PB6Dv.png" alt = "arrow" id = "arrow"></img>
                </div>
            </div>
            <div className = "introduction-main-div">
                <div className = "introduction-texts-div">
                    <div className = "intro-divs">
                        <div id = "introduction-div">
                            <div className = "index-hr-flex">
                                <h2 className = "index-hr-titles fm-segoi font-color-white margin-auto">Introdução</h2>
                                <hr className = "index-hr hr-height-3px hr-color-gray"></hr>
                            </div>
                            <div className = "introduction-texts-board">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-title">Olá, o meu nome é <a href = "https://discordapp.com/users/911002921594925056" target = "_blank" rel="noreferrer" id = "janny-span">Janny</a>!</h2>
                                    <div className = "introduction-title-lines">
                                        <img id = "introduction-title-red-line" src = "https://i.imgur.com/dZpLKrm.png" alt = "red-line"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text">Sou um bot focado com multifuncionalidades, como economia, diversão, moderação e utilidades.<br></br>Estou aqui para ajudar você a entreter o seu servidor!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div id = "introduction-aboutme-div">
                            <div className = "index-hr-flex">
                                <h2 className = "index-hr-titles fm-segoi font-color-white margin-auto">Sobre mim</h2>
                                <hr className = "index-hr hr-height-3px hr-color-gray"></hr>
                            </div>
                            <div className = "introduction-texts-board">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-title">Quem sou eu?</h2>
                                    <div className = "introduction-title-lines">
                                        <img id = "introduction-title-red-line" src = "https://i.imgur.com/dZpLKrm.png" alt = "red-line"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text">É um prazer te conhecer, o meu nome é Janny! Sou um bot simples criado para o Discord, e estou aqui para lhe ajudar a entreter a sua comunidade. Inicialmente, eu fui criado por <a id = "introduction-aboutme-username" href = "" target = "_blank">Eric2605</a> apenas para divertir um grupo de amigos do meu criador, e nem tinha planos de me tornar o bot que sou hoje. Porém, o projeto acabou expandindo com o tempo, e hoje já estou em mais de 150 servidores! Meu objetivo é ser reconhecido pela plataforma, trazendo alegria para as pessoas ^^</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div className = "index-hr-flex" id = "index-hr-commands">
                            <h2 className = "index-hr-titles fm-segoi font-color-white margin-auto">Comandos</h2>
                            <hr className = "index-hr hr-height-3px hr-color-gray"></hr>
                        </div>
                        <div className = "introduction-texts-board">
                            <div>
                                <h2 className = "introduction-texts" id = "introduction-commands-title">Meus comandos</h2>
                                <div className = "introduction-title-lines">
                                    <img id = "introduction-title-red-line" src = "https://i.imgur.com/dZpLKrm.png" alt = "red-line"></img>
                                </div>
                            </div>
                            <div>
                                <p className = "introduction-texts" id = "introduction-text">Atualmente eu possuo mais de 160 comandos, e estou sempre recebendo atualizações e novas funcionalidades. Como são muitos comandos, listar todos eles aqui seria bem chato, não? Por isso, vou facilitar sua vida e listar as categorias em que eles são divididos, confira:</p>
                            </div>
                            <div className = "introduction-categories">
                                <div className = "introduction-categories-divs">
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-0">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                <img src = "https://i.imgur.com/Tyjyk3q.png" alt = "ModIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-0">Moderação</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify">Aqui temos comandos para ajudar você a moderar seu servidor com mais praticidade!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-0">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-1">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/V3THGCm.png" alt = "FunIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-1">Diversão</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Comandos para você se divertir com os seus amigos. Hackeie seus amigos, veja o tamanho da sua banana, crie ships, jogue minigames e muito mais!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-1">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-2">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/avYyH4y.png" alt = "ActIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-2">Ações</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Interaja com seus amigos usando as mais variadas ações. Mostre que está feliz ou triste, dance com seus amigos, ataque seus inimigos {'>:)'}, e muito mais em 20 ações!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-2">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-3">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/zi1dADr.png" alt = "UtilIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-3">Utilidades</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Traduza textos em outros idiomas, role dados, faça contas, pesquise por imagens e letras de músicas, veja informações sobre seu servidor, canal e usuários. Tudo e mais um pouco!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-3">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-4">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/7dIisbo.png" alt = "PsIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-4">Photoshop</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Crie memes, customize o seu avatar e crie montagens engraçadas com seus amigos!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-4">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-5">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/rcwIksr.png" alt = "MiscIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-5">Diversos</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Comandos extras para você que quer saber um pouco mais sobre mim e como funciono, quer reportar algum problema ou sugerir funcionalidades novas.</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-5">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-6">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/A9AkAO2.png" alt = "EcoIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-6">Economia</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Confira meu próprio sistema de economia e junte o máximo de moedas que puder. Aposte em minigames como blackjack, cara ou coroa, dados, corridas, e muito mais!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-6">Ver comandos</button></a>
                                        </section>
                                    </div>
                                    <div className = "introduction-categories-flex mw-32rem margin-auto" id = "categorie-7">
                                        <div className = "display-flex-row">
                                            <section className = "categorie-image-section">
                                                <div className = "categorie-icons">
                                                    <img src = "https://i.imgur.com/uhAKy3d.png" alt = "SocIcon" className = "index-icons"></img>
                                                </div>
                                            </section>
                                            <section className = "categorie-title-section">
                                                <h3 className = "categorie-titles font-color-white fd-underline-7">Social</h3>
                                            </section>
                                        </div>
                                        <section className = "categorie-description-section">
                                            <p className = "categorie-descriptions ta-justify fc-gray-2">Crie e customize seu próprio perfil com cenários, layouts, gênero e muito mais!</p>
                                        </section>
                                        <section className = "categorie-button-section">
                                            <a href = "/commands"><button className = "index-categorie-buttons" id = "cat-button-7">Ver comandos</button></a>
                                        </section>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className = "intro-divs">
                        <div id = "introduction-invite-div">
                            <div className = "index-hr-flex" id = "index-hr-invite">
                                <h2 className = "index-hr-titles fm-segoi font-color-white margin-auto">Convite</h2>
                                <hr className = "index-hr hr-height-3px hr-color-gray"></hr>
                            </div>
                            <div className = "introduction-texts-board">
                                <div>
                                    <h2 className = "introduction-texts" id = "introduction-title">Me adicione no seu servidor</h2>
                                    <div className = "introduction-title-lines">
                                        <img id = "introduction-title-red-line" src = "https://i.imgur.com/dZpLKrm.png" alt = "red-line"></img>
                                    </div>
                                </div>
                                <div>
                                    <p className = "introduction-texts" id = "introduction-text">Quer ver como eu funciono? Então basta clicar no botão abaixo para me adicionar no servidor de sua escolha!<br></br>Obs: Eu posso precisar de permissões específicas para executar os comandos da categoria de Moderação. No botão abaixo está o link de convite com todas as permissões necessárias para que eu funcione corretamente!</p>
                                </div>
                                <div>
                                    <a className = "introduction-invite-button" href = {inviteLink}>
                                        <button className = "introduction-buttons fm-segoi" id = "introduction-text">Me adicione!</button>
                                    </a>
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