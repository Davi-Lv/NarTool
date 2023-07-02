import '../../../App.css'
import React, { useState } from 'react';
import Perfil from '../../../assets/perfil.svg'
import IconKey from '../../../assets/key.svg'
import Brilho from '../../../assets/brilho.svg'
import { Link } from 'react-router-dom'

export default function Sua_conta() {
  const [PlanoAtivado, setPlanoAtivado] = useState(false);

  const OnAndOff = () => {
    setPlanoAtivado(!PlanoAtivado);
  };

  return (
    <>
      <div className='suaConta'>
        <h1>Suas informações</h1>
        <div className="informacoes">
          <button className="nomeInfo">
            <div className="nome">
              Nome
              <img src={Perfil} alt="icone perfil" />
            </div>
            <div className="nomeUser">Davi</div>
          </button>

          <button className="senhaInfo">
            <div className="alterarSenha">
              Alterar senha
              <img src={IconKey} alt="icone key" />
            </div>
            <div className="senhaUser">**********</div>
          </button>

          <button className={`narplusInfo ${PlanoAtivado ? 'ativado' : 'desativado'}`} onClick={OnAndOff}>
            <div className="narplus">Narplus+</div>
            <div className="narplusUser">{PlanoAtivado ? 'Ativado' : 'Desativado'}</div>
          </button>
        </div>
      </div>

      <div className="planos">
        <h1>Plano atual {PlanoAtivado ? '(NarPlus+)' : '(Padrão)'}</h1>
        <div className="planosDisponiveis">

          <div className="padrao">
            <div className="tituloPlanoPadrao">
              <p className='gratis'>{PlanoAtivado ? 'Você tem o NarPlus :)' : 'Seu plano atual'}</p>
              <h2>Padrão</h2>
              <div className="funcionamento">
                <p>GPT-3</p>
                <p>Historias normais</p>
                <p>10 Criações por mês</p>
              </div>
            </div>
          </div>

          <div className="Narplus">
            <p className='preco'>{PlanoAtivado ? 'Seu plano atual' : '29,90/mês'}</p>
            <h2>NarPlus <img src={Brilho} alt="icone brilho" /></h2>
            <div className="funcionamentoPlus">
              <p>Mais detalhes</p>
              <p>GPT-4</p>
              <p>hitorias maiores</p>
              <p>Crie campanhas do seu jeito</p>
              <p>Sem limites</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
