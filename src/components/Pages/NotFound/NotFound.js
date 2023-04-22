import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className = "not-found-div">
            <div className = "not-found-title-div">
                <h1 className = "not-found-404">404</h1>
            </div>
            <div className = "not-found-texts-div">
                <p className = "not-found-texts">Página não encontrada</p>
                <Link to = "/" className = "not-fount-redirect">Voltar para página principal</Link>
            </div>
        </div>
    )
}