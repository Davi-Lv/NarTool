import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação do usuário
    console.log('Email:', email);
    console.log('Password:', password);
    // Redirecionar para a página principal, caso a autenticação seja bem-sucedida
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
}
