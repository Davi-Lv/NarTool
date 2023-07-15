import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Perfil from '../../../assets/perfil.svg';
import IconKey from '../../../assets/key.svg';
import Brilho from '../../../assets/brilho.svg';
import { Link } from 'react-router-dom';

export default function Sua_conta() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      const userEmail = localStorage.getItem('email');
      if (userEmail) {
        try {
          const response = await axios.get(`http://localhost:3000/usuario/nome?email=${userEmail}`);
          const { nome } = response.data;
          setUserName(nome);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchUserName();
  }, []);

  const [PlanoAtivado, setPlanoAtivado] = useState(false);

  const OnAndOff = () => {
    setPlanoAtivado(!PlanoAtivado);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    window.location.href = '/Login';
  };

  return (
    <>
      <div className='suaConta'>
        <h1>
          Suas informações <p onClick={handleLogout}>Sair da conta</p>
        </h1>
        <div className="informacoes">
          <button className="nomeInfo">
            <div className="nome">
              Nome
              <img src={Perfil} alt="icone perfil" />
            </div>
            <div className="nomeUser">{userName}</div>
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
            <p className='preco'>{PlanoAtivado ? 'Seu plano atual' : '9,90/mês'}</p>
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
  );
}
