import './support.scss';

export default function Support() {
    const iconURL = "https://i.imgur.com/7rCYNja.png";
    const supportServerURL = "https://discord.gg/egnNbVvnqx";
    const onlineCount = 90;
    const memberCount = 750;
    const onlineIcon = "../../images/img_online.png";
    const offlineIcon = "../../images/img_offline.png";

    return (
        <div className = "support-page">
            <div className = "support-main">
                <div className = "support-main-flex">
                    <div className = "support-image-texts-flex">
                        <div className = "support-texts-div">
                            <div id = "support-texts-title-div">
                                <h2 id = "support-title">Suporte do Janny</h2>
                            </div>
                            <div id = "support-texts-troubles-div">
                                <ul className = "support-troubles-ul">
                                    <li>Dúvidas sobre o bot?</li>
                                    <li>Problemas ao usar?</li>
                                    <li>Precisa de ajuda?</li>
                                </ul>
                                <ul className = "support-troubles-ul">
                                    <li>Gostaria de conversar?</li>
                                    <li>Busca conhecer pessoas novas?</li>
                                    <li>Quer se divertir?</li>
                                </ul>
                            </div>
                            <div className = "support-texts-description-div">
                                <p className = "support-description">Então eu tenho uma sugestão para você: a Janny City! Lá temos uma comunidade incrível e receptiva que lhe ajudará com o que você precisar. Venha se juntar a nossa cidade, estamos de braços abertos para você! ❤</p>
                            </div>
                            <div id = "support-texts-button-div">
                                <button type = "button" id = "support-know-button">Conhecer</button>
                            </div>
                        </div>
                        <div className = "support-image-div">
                            <img id = "support-image" src = {iconURL} alt = "JCIcon"></img>
                        </div>
                    </div>
                    <div className = "support-help-div-flex">
                        <div className = "support-help-texts-invite-flex">
                            <div className = "support-help-texts-flex">
                                <div className = "support-help-title">
                                    <h2 id = "support-title">Servidor de Suporte</h2>
                                </div>
                                <div className = "support-help-description">
                                    <p className = "support-description-ticket">Precisa de ajuda? Entre em meu servidor e abra um ticket no atendimento.<br></br>Ficaremos felizes em lhe ajudar!</p>
                                </div>
                            </div>
                        </div>
                        <div className = "support-help-invite">
                            <div className = "support-invite-link-invite-flex">
                                <div className = "support-invite-link-div">
                                    <a className = "support-invite-link-url" target = "_blank" rel="noreferrer" href = {supportServerURL}>{supportServerURL}</a>
                                </div>
                                <div className = "support-invite-div">
                                    <div className = "support-invite-title-details-flex">
                                        <div className = "support-invite-title-div">
                                            <p id = "invite-title">JANNY ENVIOU UM CONVITE PARA ENTRAR EM UM SERVIDOR</p>
                                        </div>
                                        <div className = "support-invite-details-flex">
                                            <div className = "support-invite-icon-div">
                                                <img id = "support-invite-icon" src = {iconURL} alt = "JCIcon"></img>
                                            </div>
                                            <div className = "support-invite-name-membercount-flex">
                                                <div className = "support-invite-name">
                                                    <a id = "support-invite-guildname" href = {supportServerURL} target = "_blank" rel="noreferrer">Janny City</a>
                                                </div>
                                                <div className = "support-invite-online-offline-flex">
                                                    <div className = "online-flex">
                                                        <div className = "online-icon-div">
                                                            <img className = "icons" src = {onlineIcon} alt = "onlineIcon"></img>
                                                        </div>
                                                        <div className = "online-count-div">
                                                            <p className = "p-counters">{onlineCount} online</p>
                                                        </div>
                                                    </div>
                                                    <div className = "offline-flex">
                                                        <div className = "offline-icon-div">
                                                            <img className = "icons" src = {offlineIcon} alt = "offlineIcon"></img>
                                                        </div>
                                                        <div className = "offline-count-div">
                                                            <p className = "p-counters">{memberCount} Membros</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "support-invite-join-div">
                                                <a id = "join-button-text" href = {supportServerURL} target = "_blank" rel="noreferrer">
                                                    <button id = "join-button">Juntar-se</button></a>
                                            </div>
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
};