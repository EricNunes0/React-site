import './NavBar.css';
import NavMenuInteraction from './NavMenuInteraction';
import NavHide from '../../../Functions/NavHide';
import config from '../../../config.json';

function NavBar() {
    //const oAuth = config.oAuthURL;
    const inviteLink = config.inviteLink;

    return (
        <div className = "nav-page">
            <nav className = "nav-bar opened">
                <div className = "navigation-bar-max-width-1024px">
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-1" href = "/">
                                Início
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-2" href = "/about">
                                Sobre
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-3" href = "/Commands">
                                Comandos
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-4" href = "/support">
                                Suporte
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <a className = "nav-texts red" id = "nav-text-4" href = {inviteLink}>
                            Adicionar
                        </a>
                    </div>
                </div>
                <div className = "navigation-bar-max-width-768px">
                    <div className = "navigation-menu">
                        <div id = "navigation-bar-button"  onClick = {() => NavMenuInteraction}>
                            <div>
                                <img src = "https://i.imgur.com/PduipVM.png" alt = "BarMenuIcon" id = "navigation-bar-menu-icon"></img>
                            </div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className = "navigation-menu-div closed">
                                <div className = "navigation-bar-texts-div">
                                    <div className = "navigation-align-img-text">
                                        <a className = "nav-texts red" id = "nav-text-1" href = "/">Início
                                        </a>
                                    </div>
                                </div>
                                <div className = "navigation-bar-texts-div">
                                    <div className = "navigation-align-img-text">
                                        <a className = "nav-texts red" id = "nav-text-2" href = "/about">Sobre</a>
                                    </div>
                                </div>
                                <div className = "navigation-bar-texts-div">
                                    <div className = "navigation-align-img-text">
                                        <a className = "nav-texts red" id = "nav-text-3" href = "/commands">Comandos</a>
                                    </div>
                                </div>
                                <div className = "navigation-bar-texts-div">
                                    <div className = "navigation-align-img-text">
                                        <a className = "nav-texts red" id = "nav-text-4" href = "/support">Suporte</a>
                                    </div>
                                </div>
                                <div className = "navigation-bar-texts-div">
                                    <div className = "navigation-align-img-text">
                                        <a className = "nav-texts gray" id = "nav-text-enter" href = {inviteLink}>Adicionar</a>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className = "nav-bar-button-div">
                    <button className = "nav-bar-button" onClick = {NavHide}>
                        <img src = "https://i.imgur.com/cb7E2P8.png" alt = "Início" id = "nav-button-image"/>
                    </button>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;