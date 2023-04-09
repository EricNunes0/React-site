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
                <h3 className = "commands-page-description">Atualmente eu possuo 167 comandos com as mais variadas funções.<br></br>Para facilitar sua vida, os comandos são divididos nas 8 categorias listadas abaixo:</h3>
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
                                                <p className = "commands-descriptions font-color-white" id = "commands-description-0-0">Adicione de 1 até 10 cargos em um usuário</p>
                                                <hr className = "hr-color-gray"></hr>
                                                <div className = "commands-aliases-flex">
                                                    <div className = "aliases-title">
                                                        <h4 className = "font-color-white">Sinônimos</h4>
                                                    </div>
                                                    <div className = "aliases-list-div">
                                                        <p className = "font-color-white">{prefix}addroles, {prefix}giverole, {prefix}giveroles, {prefix}roleadd, {prefix}rolesadd, {prefix}rolegive, {prefix}rolesgive</p>
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