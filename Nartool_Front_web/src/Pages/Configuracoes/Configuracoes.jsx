import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import SuaConta from './Sua_conta/Sua_conta';
import SobreProjeto from './Sobre_projeto/Sobre_projeto';

export default function Configuracoes() {
  const [exibirSuaConta, setExibirSuaConta] = useState(false);
  const [exibirSobreProjeto, setExibirSobreProjeto] = useState(false);

  const handleExibirSuaConta = () => {
    setExibirSuaConta(true);
    setExibirSobreProjeto(false);
  };

  const handleExibirSobreProjeto = () => {
    setExibirSuaConta(false);
    setExibirSobreProjeto(true);
  };

  return (
    <>
      <Menu />
      <div className="subMenuConfiguracao">
        <button className={exibirSuaConta ? 'selecionado' : ''} onClick={handleExibirSuaConta}>
          Sua conta
        </button>
        <button className={exibirSobreProjeto ? 'selecionado' : ''} onClick={handleExibirSobreProjeto}>
          Sobre o projeto
        </button>
      </div>
      {exibirSuaConta && <SuaConta />}
      {exibirSobreProjeto && <SobreProjeto />}
    </>
  );
}
