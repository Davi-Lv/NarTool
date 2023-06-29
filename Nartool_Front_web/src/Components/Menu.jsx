import '../App'
import LogoCompleta from '../../src/assets/LogoCompleta.svg'

export default function Menu() {

  return (
    <div className="menu">
        <img src={LogoCompleta} alt="logo" className="logo"/>
        <div className="menu-items">
            <a href="" >Sua Conta</a>
            <a href="" >Campanhas</a>
            <a href="" >Configurações</a>
        </div>
    </div>
  )
}
