import './App.css'
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <nav>
            <img src="" alt="Logo" />
            <ul>
                <li>
                    <Link to="">Sua conta</Link>
                </li>
                <li>
                    <Link to="">Campanhas</Link>
                </li>
                <li>
                    <Link to="">Configurações</Link>
                </li>
            </ul>
        </nav>
    )
}
