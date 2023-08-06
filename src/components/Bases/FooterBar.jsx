import './FooterBar.css';

export default function FooterBar() {
    const Terms = "https://drive.google.com/file/d/1Tyy-3qfLGq_tQ1UqEBK6NAhrXLgfWKe0/view?usp=sharing";

    return (
        <div className = "FooterBar">
            <footer className = "mainFooter">
                <div className = "footer-categories">
                    <div className = "footer-divs" id = "createdBy">
                        <h3 className = "footer-titles">Criado por</h3>
                        <ul className="footer-ul" id="footer-main-div-text-tag">
                            <li className = "footer-li">
                                <a className = "footer-li-links" id = "footer-li-createdby" href="https://github.com/EricNunes0" target="_blank" rel="noreferrer">
                                    eric2605
                                </a>
                            </li>
                        </ul>
                    </div>
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
                        <ul>
                            <li className = "footer-li">
                                <a href = {Terms} target = "_blank" className = "footer-li-links">Termos de serviço</a>
                            </li>
                            <li className = "footer-li">
                                <a href = {Terms} target = "_blank" className = "footer-li-links">Política de privacidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
};