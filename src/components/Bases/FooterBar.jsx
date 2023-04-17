import './FooterBar.css';

function FooterBar() {
    const Terms = "https://drive.google.com/file/d/1Tyy-3qfLGq_tQ1UqEBK6NAhrXLgfWKe0/view?usp=sharing";

    return (
        <div className = "FooterBar">
            <footer className = "mainFooter">
                <div className = "footerCategories">
                    <div className = "footerDivs" id = "createdBy">
                        <ul className="footer-texts" id="footer-main-div-text-tag">
                            <li className = "font-color-white">Criado por <br></br><a href="https://github.com/EricNunes0" target="_blank" rel="noreferrer">Eric2605#9133</a></li>
                            <li className = "font-color-white">Versão 1.0.22</li>
                        </ul>
                    </div>
                    <div className = "footerDivs">
                        <h3 className = "footer-titles">Bot</h3>
                        <ul>
                            <li className = "footer-li">
                                <a href = "/" className = "footer-texts">Início</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/about" className = "footer-texts">Sobre</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/commands" className = "footer-texts">Comandos</a>
                            </li>
                            <li className = "footer-li">
                                <a href = "/support" className = "footer-texts">Suporte</a>
                            </li>
                        </ul>
                    </div>
                    <div className = "footerDivs">
                        <h3 className = "footer-titles">Legal</h3>
                        <ul>
                            <li className = "footer-li">
                                <a href = {Terms} className = "footer-texts">Termos de serviço</a>
                            </li>
                            <li className = "footer-li">
                                <a href = {Terms} className = "footer-texts">Política de privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default FooterBar;