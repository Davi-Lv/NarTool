import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CriarConta() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/criar-conta', {
        nome,
        email,
        senha,
      });
      console.log(response.data); // Exemplo: exibir resposta do servidor

      // Redirecionar para a página de login após o cadastro bem-sucedido
      // history.push('/login');
    } catch (error) {
      setErro('Erro ao criar conta. Por favor, tente novamente.'); // Exemplo: exibir mensagem de erro
      console.error(error);
    }
  };

  return (
    <div className="cadastro">
      <h2>Criar Conta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button type="submit">Criar Conta</button>
      </form>

      {erro && <p className="erro">{erro}</p>}

      <p>
        Já tem uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
}
