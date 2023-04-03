import './FooterBar.css';

function FooterBar() {
    return (
        <div className = "FooterBar">
            <footer className = "mainFooter">
                <div className = "footerCategories">
                    <div className = "footerDivs" id = "createdBy">
                        <p className="footer-texts" id="footer-main-div-text-tag">
                            Criado por <br></br><a href="https://discordapp.com/users/656295512219058196" target="_blank" rel="noreferrer">Eric2605#9133</a>
                        </p>
                    </div>
                    <div className = "footerDivs">
                        <h3 className = "footer-titles">Bot</h3>
                        <ul>
                            <li className = "footer-li">
                                <a href = "/" className = "footer-texts">Início</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/About" className = "footer-texts">Sobre</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/Commands" className = "footer-texts">Comandos</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/Support" className = "footer-texts">Suporte</a>
                            </li>
                        </ul>
                    </div>
                    <div className = "footerDivs">
                        <h3 className = "footer-titles">Legal</h3>
                        <ul>
                            <li className = "footer-li">
                                <a href = "/Terms" className = "footer-texts">Termos de serviço</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/Privacy" className = "footer-texts">Política de privacidade</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/Cookies" className = "footer-texts">Política de cookies</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterBar;