import LogoCompleta from '../../../src/assets/LogoCompleta.svg'
import '../../App.css'
import { Link } from "react-router-dom";

export default function Menu() {

    return (
        <nav className="menu">
            <img src={LogoCompleta} alt="logo" className="logo" />
            <ul className="menu-items">
                <li>
                    <Link to="/Inicio">Campanhas</Link>
                </li>
                <li>
                    <Link to="/Configuracoes">Configurações</Link>
                </li>
            </ul>
        </nav>
    )
}
