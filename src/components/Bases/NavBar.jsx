import './NavBar.css';
import NavHide from '../../Functions/NavHide';

function NavBar() {

    let oAuth = "https://discord.com/api/oauth2/authorize?client_id=911002921594925056&redirect_uri=http%3A%2F%2Flocalhost%3A3001&response_type=code&scope=identify";

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
                                <div>
                                    <img src="../images/img_icon(0).png" alt = "Início" className = "nav-icons" id="nav-icon-main"/>
                                </div>
                                Início
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-2" href = "/about">
                                <img src="../images/img_icon(1).png" alt = "Sobre" className = "nav-icons" id="nav-icon-about"/>Sobre
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-3" href = "/Commands">
                                <img src="../images/img_icon(2).png" alt = "Comandos" className = "nav-icons" id="nav-icon-commands"/>Comandos
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <div className = "navigation-align-img-text">
                            <a className = "nav-texts red" id = "nav-text-4" href = "/support">
                                <img src="../images/img_icon(3).png" alt = "Suporte" className = "nav-icons" id="nav-icon-commands"/>Suporte
                            </a>
                        </div>
                    </div>
                    <div className = "navigation-bar-texts-div">
                        <a className = "navigation-align-img-text" id = "nav-enter-div" href = {oAuth}>
                                <img src="../images/img_discord.png" alt = "Entrar" className = "nav-icons" id="nav-bars-enter-discord-logo"/>Entrar
                        </a>
                    </div>
                </div>
                <div className = "navigation-bar-max-width-768px">
                    <div className = "navigation-menu">
                        <div id = "navigation-bar-button"  onClick = {menuInteraction}>
                            <div>
                                <img src = "../images/img_BarMenuIcon.png" alt = "BarMenuIcon" id = "navigation-bar-menu-icon"></img>
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
                                        <a className = "nav-texts red" id = "nav-text-3" href = "/Commands">Comandos</a>
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
                                            <a className = "nav-texts gray" id = "nav-text-enter" href = "/enter">Entrar</a>
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