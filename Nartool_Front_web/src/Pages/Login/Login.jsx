import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../../assets/logoCompleta.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tentativas, setTentativas] = useState(0);
  const [bloqueado, setBloqueado] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      const mensagem = 'Preencha todos os campos';
      setMensagem(mensagem);
      return;
    }

    if (bloqueado) {
      const mensagem = 'Usuário bloqueado. Tente novamente mais tarde.';
      setMensagem(mensagem);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('email', email);
        window.location.href = 'http://localhost:5173/Inicio/';
      } else {
        const mensagem = 'Email ou senha incorretos';
        setTentativas((prevTentativas) => prevTentativas + 1);
        if (tentativas >= 2) {
          setBloqueado(true);
        }
        setMensagem(mensagem);
      }
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
    }
  };

  return (
    <div className="inicioScreen">
      <div className="logoAndText">
        <img src={Logo} alt="Logo" />
        <p>Bem-vindo ao nosso mundo de possibilidades
          infinitas, onde a imaginação é o limite! Desenrole
          histórias épicas, dê vida aos seus personagens
          e faça historias que faíscam emoção. Nossa ferramenta
          é a parceira perfeita para tornar suas narrativas
          envolventes, detalhadas e cativantes.</p>
      </div>
      <div className="allForms">
        <h2>Entrar na conta</h2>
        <p>Seja bem vindo de volta :)</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              placeholder='Email'
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMensagem('');
              }}
            />
          </div>
          <div className="form-group">
            <input
              placeholder='Senha'
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
                setMensagem('');
              }}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        {bloqueado ? (
          <p className="errorEmailExist">Usuário bloqueado. Tente novamente mais tarde.</p>
        ) : (
          mensagem && <p className="errorEmailExist">{mensagem}</p>
        )}
        <p>
          Ainda não tem uma conta? <Link to="/cadastro" style={{ textDecoration: 'underline' }}>Cadastre-se</Link>
        </p>
      </div>
    </div >
  );
}
