import '../../../App.css'
import { Link } from 'react-router-dom'

export default function Sua_conta() {

  return (
    <>
      <h1>Suas informações</h1>
      <div className="informacoes">
        <div className="nomeInfo">
          <div className="nome">Nome
            <img src="" alt="icon perfil" />
          </div>
          <div className="nomeUser">davi</div>
        </div>

        <div className="senhaInfo">
          <div className="alterarSenha">
            Alterar senha
            <img src="" alt="icon key" />
          </div>
          <div className="senhaUser">**********</div>
        </div>

        <div className="narplus">
          <div className="narplusInfo">
            <div className="narplus">Narplus</div>
            <div className="narplusUser">Desativado</div>
          </div>
        </div>
      </div>
    </>
  )
}
