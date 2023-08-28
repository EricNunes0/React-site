import './FooterBar.css';

export default function FooterBar() {
    const Terms = "https://drive.google.com/file/d/1Tyy-3qfLGq_tQ1UqEBK6NAhrXLgfWKe0/view?usp=sharing";

    return (
        <div className = "FooterBar">
            <footer id = "main-footer">
                <div id = "footer-left">
                    <div className = "footer-divs" id = "createdBy">
                        <div id = "footer-logo-div">
                            <div id = "footer-logo-flex">
                                <div id = "footer-logo-icon-div">
                                    <img id = "footer-logo-icon" src = "images/logo.png" width = {30} height = {30}></img>
                                </div>
                                <div id = "footer-logo-name-div">
                                    <span id = "footer-logo-name">Janny</span>
                                </div>
                            </div>
                            <div id = "footer-rights">
                                <p id = "footer-rights-text">© <b>Eric2605</b> 2021 - {new Date().getFullYear()} - Todos os direitos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id = "footer-right">
                    <div className = "footer-divs">
                        <h3 className = "footer-titles">Bot</h3>
                        <ul className = "footer-ul">
                            <li className = "footer-li">
                                <a href = "/" className = "footer-li-links">Início</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/about" className = "footer-li-links">Sobre</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/commands" className = "footer-li-links">Comandos</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/support" className = "footer-li-links">Suporte</a>
                            </li>
                        </ul>
                    </div>
                    <div className = "footer-divs">
                        <h3 className = "footer-titles">Legal</h3>
                        <ul className = "footer-ul">
                            <li className = "footer-li">
                                <a href = {Terms} target = "_blank" rel="noreferrer" className = "footer-li-links">Termos de serviço</a>
                            </li>
                            <li className = "footer-li">
                                <a href = {Terms} target = "_blank" rel="noreferrer" className = "footer-li-links">Política de privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
};