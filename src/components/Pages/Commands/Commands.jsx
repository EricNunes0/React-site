import './Commands.css';
//import cmds from '../../../Functions/Commands.json';
import CommandBarsActive from '../../../Functions/CommandBarsActive';
import OpenPanel from '../../../Functions/OpenPanel';

function commands() {
    const prefix = "a@";
    //const moderationCmds = cmds.cmds.mod;
    const categorieName = "Moderação";
    return (
        <div className = "commands-page">
            <div className = "commands-page-main">
                <h1 className = "commands-page-title">Comandos do Janny</h1>
                <h3 className = "commands-page-description">Atualmente eu possuo 167 comandos com as mais variadas funções.<br></br>Para facilitar sua vida, os comandos são divididos nas 9 categorias listadas abaixo:</h3>
                <div className = "commands-board-flex">
                    <div className = "categorie-board">
                        <div className = "categorie-board-flex">
                            <div className = "categorie-board-text-div">
                                <h1 className = "categories-text">Categorias</h1>
                            </div>
                            <div className = "categorie-board-buttons-divs">
                                <div className = "categorie-button-div" id = "categorie-mod">
                                    <button type = "button" className = "categorie-buttons button-on" id = "categorie-button-0" onClick = {() => {OpenPanel({cat: 0})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Moderação</h4>
                                            <p className = "categorie-buttons-texts">27</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-fun">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-1" onClick = {() => {OpenPanel({cat: 1})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Diversão</h4>
                                            <p className = "categorie-buttons-texts">14</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-act">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-2" onClick = {() => {OpenPanel({cat: 2})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Ações</h4>
                                            <p className = "categorie-buttons-texts">19</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-util">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-3" onClick = {() => {OpenPanel({cat: 3})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Utilidades</h4>
                                            <p className = "categorie-buttons-texts">26</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-ps">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-4" onClick = {() => {OpenPanel({cat: 4})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Photoshop</h4>
                                            <p className = "categorie-buttons-texts">34</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-div">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-5" onClick = {() => {OpenPanel({cat: 5})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Diversos</h4>
                                            <p className = "categorie-buttons-texts">7</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-eco">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-6" onClick = {() => {OpenPanel({cat: 6})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Economia</h4>
                                            <p className = "categorie-buttons-texts">28</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-soc">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-7" onClick = {() => {OpenPanel({cat: 7})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Social</h4>
                                            <p className = "categorie-buttons-texts">10</p>
                                        </div>
                                    </button>
                                </div>
                                <div className = "categorie-button-div" id = "categorie-conf">
                                    <button type = "button" className = "categorie-buttons button-off" id = "categorie-button-8" onClick = {() => {OpenPanel({cat: 8})}}>
                                        <div className = "categorie-buttons-texts-div">
                                            <h4 className = "categorie-buttons-texts">Configuração</h4>
                                            <p className = "categorie-buttons-texts">2</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "commands-panel">
                        <div className = "commands-panel-flex">
                            <div className = "commands-panel-header">
                                <div className = "commands-panel-header-flex">
                                    <div className = "commands-panel-header-title-div">
                                        <h2 className = "commands-panel-header-title font-color-white">Comandos de {categorieName}</h2>
                                    </div>
                                    <div className = "commands-panel-header-search-div">
                                        <input id = "commands-panel-header-search-input" type = "text" placeholder = "Pesquise um comando" maxLength = {20}></input>
                                        <button id = "commands-panel-header-search-button" type = "button" value = "o">
                                            <img className = "pointer-events-none" src = "../../images/commands/img_SearchIcon(0).png" alt = "searchIcon" id = "search-icon"></img>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className = "commands-panel-main">
                                <div className = "commands-panel-base">
                                    <div className = "commands-panels panel-on" id = "commands-panel-0">
                                        <div className = "commands-bars close" id = "command-0-0">
                                            <div className = "commands-titles-divs" id = "commands-title-0-0" onClick = {() => {CommandBarsActive({cat: 0, id: 0})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}addrole</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-0">Adicione de 1 até, no máximo, 10 cargos em um usuário</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}addroles, {prefix}giverole, {prefix}giveroles, {prefix}roleadd, {prefix}rolesadd, {prefix}rolegive, {prefix}rolesgive</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}addrole {'<@usuário>'} {'<#cargos>'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/IHmNFDM.gif" className = "example-image" id = "addrole" alt = "addrole"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CARGOS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CARGOS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-1">
                                            <div className = "commands-titles-divs" id = "commands-title-0-1" onClick = {() => {CommandBarsActive({cat: 0, id: 1})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}ban</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-1">Aplique um banimento em até 5 usuários</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-2">
                                            <div className = "commands-titles-divs" id = "commands-title-0-2" onClick = {() => {CommandBarsActive({cat: 0, id: 2})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}banlist</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-2">Veja a lista de banimentos do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}listban, {prefix}banslist, {prefix}listbans, {prefix}banlista, {prefix}listaban, {prefix}banslista, {prefix}listabans</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}banlist</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-3">
                                            <div className = "commands-titles-divs" id = "commands-title-0-3" onClick = {() => {CommandBarsActive({cat: 0, id: 3})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}checkban</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-3">Verifique se um usuário está banido do seu servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}bancheck, {prefix}infoban, {prefix}baninfo</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}checkban {'<ID do usuário>'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/dHd3XWP.gif" className = "example-image" id = "checkban" alt = "checkban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-4">
                                            <div className = "commands-titles-divs" id = "commands-title-0-4" onClick = {() => {CommandBarsActive({cat: 0, id: 4})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}clear</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-4">Delete até 100 mensagens em um canal de texto</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}clean, {prefix}delete, {prefix}purge, {prefix}apagar, {prefix}limpar</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}clear {'<quantidade>'} {'(#canal)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/Mgr4fSg.gif" className = "example-image" id = "clear" alt = "clear"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR MENSAGENS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR MENSAGENS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-5">
                                            <div className = "commands-titles-divs" id = "commands-title-0-5" onClick = {() => {CommandBarsActive({cat: 0, id: 5})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}createchannel</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-5">Crie um canal de texto/voz ou uma categoria</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}addchannel, {prefix}newchannel, {prefix}channelcreate, {prefix}channeladd, {prefix}channelnew, {prefix}criarcanal, {prefix}cc</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}createchannel {'<nome do canal>'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/cIACnRY.gif" className = "example-image" id = "createchannel" alt = "createchannel"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CANAIS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CANAIS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-6">
                                            <div className = "commands-titles-divs" id = "commands-title-0-6" onClick = {() => {CommandBarsActive({cat: 0, id: 6})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}createemoji</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-6">Crie um emoji a partir de uma imagem ou uma url</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}addemoji, {prefix}createmoji, {prefix}emojicreate, {prefix}emojiadd, {prefix}criaremoji, {prefix}ce</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}createemoji {'<URL/imagem>'} {'<nome do emoji>'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/NnxkovI.gif" className = "example-image" id = "createemoji" alt = "createemoji"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR EMOJIS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR EMOJIS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-7">
                                            <div className = "commands-titles-divs" id = "commands-title-0-7" onClick = {() => {CommandBarsActive({cat: 0, id: 7})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}createinvite</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-7">Crie um convite para o seu servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}newinvite, {prefix}invitecreate, {prefix}invitenew, {prefix}criarconvite, {prefix}ci</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}createinvite {'<tempo>'} {'(segundos/minutos/horas/dias)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/NWSYyyl.gif" className = "example-image" id = "createinvite" alt = "createinvite"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">CRIAR CONVITES</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">CRIAR CONVITES</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-8">
                                            <div className = "commands-titles-divs" id = "commands-title-0-8" onClick = {() => {CommandBarsActive({cat: 0, id: 8})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}createrole</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-8">Crie um cargo para o seu servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}newrole, {prefix}rolecreate, {prefix}rolenew, {prefix}criarcargo, {prefix}cr</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}createrole {'<nome>'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/Yff6p5L.gif" className = "example-image" id = "createrole" alt = "createrole"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CARGOS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">GERENCIAR CARGOS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-9">
                                            <div className = "commands-titles-divs" id = "commands-title-0-9" onClick = {() => {CommandBarsActive({cat: 0, id: 9})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}deletechannel</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-9">Exclua de 1 até 5 canais de texto</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-10">
                                            <div className = "commands-titles-divs" id = "commands-title-0-10" onClick = {() => {CommandBarsActive({cat: 0, id: 10})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}deleteemoji</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-10">Exclua de 1 até 10 emojis do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-11">
                                            <div className = "commands-titles-divs" id = "commands-title-0-11" onClick = {() => {CommandBarsActive({cat: 0, id: 11})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}deleterole</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-11">Exclua de 1 até 10 cargos do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-12">
                                            <div className = "commands-titles-divs" id = "commands-title-0-12" onClick = {() => {CommandBarsActive({cat: 0, id: 12})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}embedcreator</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-12">Crie uma mensagem em embed customizada</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-13">
                                            <div className = "commands-titles-divs" id = "commands-title-0-13" onClick = {() => {CommandBarsActive({cat: 0, id: 13})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}guildinvites</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-13">Veja todos os convites ativos do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-14">
                                            <div className = "commands-titles-divs" id = "commands-title-0-14" onClick = {() => {CommandBarsActive({cat: 0, id: 14})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}kick</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-14">Expulse de 1 até 5 membros do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-15">
                                            <div className = "commands-titles-divs" id = "commands-title-0-15" onClick = {() => {CommandBarsActive({cat: 0, id: 15})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}lock</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-15">Bloqueie de 1 até 5 canais de texto</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-16">
                                            <div className = "commands-titles-divs" id = "commands-title-0-16" onClick = {() => {CommandBarsActive({cat: 0, id: 16})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}removerole</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-16">Remove de 1 até 10 cargos de um usuário</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-17">
                                            <div className = "commands-titles-divs" id = "commands-title-0-17" onClick = {() => {CommandBarsActive({cat: 0, id: 17})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}removeicon</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-17">Remova o ícone atual do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-18">
                                            <div className = "commands-titles-divs" id = "commands-title-0-18" onClick = {() => {CommandBarsActive({cat: 0, id: 18})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}rolecolor</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-18">Altere a cor de 1 até 5 cargos</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-19">
                                            <div className = "commands-titles-divs" id = "commands-title-0-19" onClick = {() => {CommandBarsActive({cat: 0, id: 19})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}setguildicon</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-19">Altere o ícone do servidor com uma imagem ou url</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-20">
                                            <div className = "commands-titles-divs" id = "commands-title-0-20" onClick = {() => {CommandBarsActive({cat: 0, id: 20})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}setguildname</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-20">Altere o nome do servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-21">
                                            <div className = "commands-titles-divs" id = "commands-title-0-21" onClick = {() => {CommandBarsActive({cat: 0, id: 21})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}setnick</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-21">Altere o apelido de 1 até 5 usuários</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-22">
                                            <div className = "commands-titles-divs" id = "commands-title-0-22" onClick = {() => {CommandBarsActive({cat: 0, id: 22})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}slowmode</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-22">Ative o modo lento em um canal de texto</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-23">
                                            <div className = "commands-titles-divs" id = "commands-title-0-23" onClick = {() => {CommandBarsActive({cat: 0, id: 23})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}timeout</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-23">Coloque 1 ou mais usuários de castigo (mute)</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-24">
                                            <div className = "commands-titles-divs" id = "commands-title-0-24" onClick = {() => {CommandBarsActive({cat: 0, id: 24})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}unban</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-24">Remova o banimento de um usuário</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-25">
                                            <div className = "commands-titles-divs" id = "commands-title-0-25" onClick = {() => {CommandBarsActive({cat: 0, id: 25})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}unlock</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-25">Desbloqueie de 1 até 5 canais de texto</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "commands-bars close" id = "command-0-26">
                                            <div className = "commands-titles-divs" id = "commands-title-0-26" onClick = {() => {CommandBarsActive({cat: 0, id: 26})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-blue">{prefix}userperms</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <div className = "commands-descriptions-title-div">
                                                    <h4 className = "commands-descriptions-title fc-gray-1 margin-auto">Descrição</h4>
                                                </div>
                                                <div className = "commands-descriptions-div">
                                                    <p className = "commands-descriptions fc-gray-2" id = "commands-description-0-26">Confira todas as permissões de um membro no servidor</p>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "fc-gray-2">{prefix}banir, {prefix}banmember, {prefix}banuser, {prefix}banido</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-use-flex">
                                                    <div className = "use-flex">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Como usar</h4>
                                                    </div>
                                                    <div className = "use-div">
                                                        <p className = "fc-gray-2">{prefix}ban {'<@usuário(s)>'} {'(motivo opcional)'}</p>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-example-flex">
                                                    <div className = "example-title-div">
                                                        <h4 className = "fc-gray-1">Exemplo</h4>
                                                    </div>
                                                    <div className = "example-div">
                                                        <img src = "https://i.imgur.com/onxyADJ.gif" className = "example-image" id = "ban" alt = "ban"></img>
                                                    </div>
                                                </div>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-permissions-flex">
                                                    <div className = "permissions-title-div">
                                                        <h4 className = "fc-gray-1 margin-bottom-0">Permissões necessárias</h4>
                                                    </div>
                                                    <div className = "permissions-flex">
                                                        <div className = "permissions-divs">
                                                            <div className = "permissions-bot">
                                                                <div className = "permissions-bot-title-div">
                                                                    <h4 className = "permissions-bot-title fc-gray-2">Permissões do bot</h4>
                                                                </div>
                                                                <div className = "permissions-bot-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                            <div className = "permissions-user">
                                                                <div className = "permissions-user-title-div">
                                                                    <h4 className = "permissions-user-title fc-gray-2">Permissões do usuário</h4>
                                                                </div>
                                                                <div className = "permissions-user-bars-div">
                                                                    <button className = "permissions-buttons font-color-white">BANIR MEMBROS</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className = "commands-panels panel-off" id = "commands-panel-1-0">
                                        <div className = "commands-bars close" id = "command-1-0">
                                            <div className = "commands-titles-divs" id = "commands-title-1-0" onClick = {() => {CommandBarsActive({cat: 1, id: 0})}}>
                                                <h2 className = "commands-titles font-color-white text-decoration-underline-yellow">{prefix}8ball</h2>
                                            </div>
                                            <div className = "commands-content">
                                                <p className = "commands-descriptions font-color-white" id = "commands-description-1-0">Faça uma responda que o bot lhe responderá (100% verídico)!</p>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "font-color-white">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "font-color-white">{prefix}pergunta</p>
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
            </div>
        </div>
    )
}

export default commands;