import './Commands.css';
import InteractionMenu from '../../../Functions/InteractionMenu';

function commands() {
    return (
        <div className = "commands-page">
            <div className = "commands-page-main">
                <div className = "commands-page-main-panels">
                    <div className = "commands-panels">
                        <div className = "commands-categories" id = "commands-moderation">
                            <div className = "moderation-commands-bars close" id = "moderation-command-0">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-0" onClick = {InteractionMenu(0)}>〔+💼〕a@addrole<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-0">Adicione de 1 até 10 cargos em um usuário</p>
                                </div>
                            </div>
                            <div className = "moderation-commands-bars close" id = "moderation-command-1">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-1" onClick = {InteractionMenu(1)}>〔📤〕a@ban<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-1">Bane até 5 membros do seu servidor</p>
                                </div>
                            </div>
                            <div className = "moderation-commands-bars close" id = "moderation-command-2">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-2" onClick = {InteractionMenu(2)}>〔⛔〕a@banlist<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-2">Confira a lista de todos os banimentos do servidor</p>
                                </div>
                            </div>
                            <div className = "moderation-commands-bars close" id = "moderation-command-3">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-3" onClick = {InteractionMenu(3)}>〔🕵️〕a@checkban<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-3">Verifique se um membro está banido do seu servidor e veja informações sobre ele</p>
                                </div>
                            </div>
                            <div className = "moderation-commands-bars close" id = "moderation-command-4">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-4" onClick = {InteractionMenu(4)}>〔🧹〕a@clear<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-4">Apague mensagens de um canal de texto</p>
                                </div>
                            </div>
                            <div className = "moderation-commands-bars close" id = "moderation-command-5">
                                <h2 className = "moderation-commands-titles" id = "moderation-commands-title-5" onClick = {InteractionMenu(5)}>〔📕〕a@createchannel<span>+</span></h2>
                                <div className = "moderation-commands-content">
                                    <p className = "moderation-commands-description" id = "moderation-command-description-5">Crie um canal de texto/voz, ou uma categoria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default commands;