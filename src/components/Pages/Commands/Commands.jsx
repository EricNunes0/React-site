import './Commands.css';
import CreateCategories from './CreateCategories';
import CreateCategorieButtons from './CreateCategorieButtons';
import commandsJSON from "../../../Settings/commands.json";
import CommandSearch from "./CommandSearch";

export default function commands() {
    let categoriesLength = 0, commandsLength = 0;
    for(const categories of commandsJSON.categories) {
        categoriesLength++;
        if(categories.commands) {
            commandsLength += categories.commands.length;
        };
    }

    return (
        <div id = "commands-page">
            <div id = "commands-page-main">
                <div className = "commands-page-main-texts">
                    <div id = "commands-page-title-div">
                        <h1 id = "commands-page-title">Comandos</h1>
                    </div>
                    <div id = "commands-page-description-div">
                        <p id = "commands-page-description">Atualmente eu possuo {commandsLength} comandos divididos nas {categoriesLength} categorias listadas abaixo:</p>
                    </div>
                </div>
                <div id = "commands-board-flex">
                    <div id = "categorie-board">
                        <div id = "categorie-board-flex">
                            <div id = "categorie-board-text-div">
                                <h1 id = "categories-text">Categorias</h1>
                            </div>
                            <CreateCategorieButtons/>
                        </div>
                    </div>
                    <div className = "commands-panel">
                        <div className = "commands-panel-flex">
                            <div className = "commands-panel-header">
                                <div className = "commands-panel-header-flex">
                                    <div className = "commands-panel-header-title-div">
                                        <h1 className = "commands-panel-header-titles font-color-white" id = "commands-panel-header-title">Comandos</h1>
                                    </div>
                                    <div className = "commands-panel-header-search-div">
                                        <input id = "search-input" type = "text" placeholder = "Pesquise um comando" maxLength = {20}></input>
                                        <button id = "search-button" type = "button" value = "o" onClick={() => {CommandSearch()}}>
                                            <img className = "pointer-events-none" src = "https://i.imgur.com/YAqIGw3.png" alt = "searchIcon" id = "search-icon"></img>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className = "commands-panel-main">
                                <div className = "commands-panel-base">
                                    <CreateCategories/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};