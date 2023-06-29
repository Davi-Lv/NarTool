import './App.css'
import Menu from './Components/Menu/Menu'
import { Link } from 'react-router-dom'
import LogoCompleta from '../src/assets/LogoCompleta.svg'

export default function App() {

  return (
      <Link to="/Inicio" className="playgame">
        <img src={LogoCompleta} alt="Logo Nartool" />
        <button>Começar nova aventura</button>
      </Link>
  )
}
