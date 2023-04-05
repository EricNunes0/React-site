import './Commands.css';
import CommandBarsActive from '../../../Functions/CommandBarsActive';

function commands() {
    const prefix = "a@";
    return (
        <div className = "commands-page">
            <div className = "commands-page-main">
                <div className = "commands-page-main-panels">
                    <div className = "commands-panels">
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <hr></hr>
                        <div className = "categories-divs">
                            <div className = "commands-categories" id = "commands-moderation">
                                <div className = "moderation-commands-bars close" id = "moderation-command-0">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-0" onClick = {() => {CommandBarsActive({id: 0})}}>
                                        <h2 className = "moderation-titles">{prefix}addrole<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-0">〔+💼〕Adicione de 1 até 10 cargos em um usuário</p>
                                        <div className = "commands-aliases-flex">
                                            <div className = "aliases-title">
                                                <h4>〔🔀〕Sinônimos:</h4>
                                            </div>
                                            <div className = "aliases-list-div">
                                                <p><strong>{prefix}addroles, {prefix}giverole, {prefix}giveroles, {prefix}roleadd, {prefix}rolesadd, {prefix}rolegive, {prefix}rolesgive
                                                </strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className = "moderation-commands-bars close" id = "moderation-command-1">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-1" onClick = {() => {CommandBarsActive({id: 1})}}>
                                        <h2 className = "moderation-titles">{prefix}ban<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-1">Bane até 5 membros do seu servidor</p>
                                    </div>
                                </div>
                                <div className = "moderation-commands-bars close" id = "moderation-command-2">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-2" onClick = {() => {CommandBarsActive({id: 2})}}>
                                        <h2 className = "moderation-titles">{prefix}banlist<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-2">Confira a lista de todos os banimentos do servidor</p>
                                    </div>
                                </div>
                                <div className = "moderation-commands-bars close" id = "moderation-command-3">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-3" onClick = {() => {CommandBarsActive({id: 3})}}>
                                        <h2 className = "moderation-titles">{prefix}checkban<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-3">Verifique se um membro está banido do seu servidor e veja informações sobre ele</p>
                                    </div>
                                </div>
                                <div className = "moderation-commands-bars close" id = "moderation-command-4">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-4" onClick = {() => {CommandBarsActive({id: 4})}}>
                                        <h2 className = "moderation-titles">{prefix}clear<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-4">Apague mensagens de um canal de texto</p>
                                    </div>
                                </div>
                                <div className = "moderation-commands-bars close" id = "moderation-command-5">
                                    <div className = "moderation-commands-titles" id = "moderation-commands-title-5" onClick = {() => {CommandBarsActive({id: 5})}}>
                                        <h2 className = "moderation-titles">{prefix}createchannel<span>+</span></h2>
                                    </div>
                                    <div className = "moderation-commands-content">
                                        <p className = "moderation-commands-description" id = "moderation-command-description-5">Crie um canal de texto/voz, ou uma categoria</p>
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

export default commands;