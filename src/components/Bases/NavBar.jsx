import './NavBar.css';
import NavHide from '../../Functions/NavHide';
import config from '../../config.json';

function NavBar() {
    const oAuth = config.oAuthURL;
    const inviteLink = config.inviteLink;
    function menuInteraction() {
        let menus = document.getElementsByClassName('navigation-menu-div');
        for(let i = 0; i <= menus.length - 1; i++) {
            console.log(menus[i].className);
            let button = document.getElementById('navigation-bar-button');
            let icon = document.getElementById('navigation-bar-menu-icon');
            if(menus[i].className === `navigation-menu-div closed`) {
                menus[i].className = `navigation-menu-div opened`;
                button.style["background-color"] = "#fff";
                icon.style.filter = "invert(1)";
            } else if(menus[i].className === `navigation-menu-div opened`) {
                menus[i].className = `navigation-menu-div closed`;
                button.style["background-color"] = "rgba(0, 0, 0, 0)";
                icon.style.filter = "invert(0)";
            }
        };
    };

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
                        <div id = "navigation-bar-button"  onClick = {menuInteraction}>
                            <div>
                                <img src = "src\images\img_BarMenuIcon.png" alt = "BarMenuIcon" id = "navigation-bar-menu-icon"></img>
                            </div>
                        </div>
                        <div>
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
                                        <div className = "navigation-bar-div-area" id = "navigation-bar-texts-div-enter">
                                            <a className = "nav-texts gray" id = "nav-text-enter" href = {inviteLink}>Adicionar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "nav-bar-button-div">
                    <button className = "nav-bar-button" onClick = {NavHide}>
                        <img src="../images/nav/img_BarArrow(0).png" alt = "Início" id = "nav-button-image"/>
                    </button>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;