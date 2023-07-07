import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Inicio from './Pages/Inicio/Inicio.jsx'
import Historia_gerada from './Pages/Historia_gerada/Index.jsx'
import Configuracoes from './Pages/Configuracoes/Configuracoes.jsx'
import Tipo_preferido from './Pages/Tipo_Preferido/Tipo_preferido.jsx'
import NovaHistoria from './Pages/Inicio/Nova_Historia/NovaHistoria.jsx'
import CriarConta from './Pages/Criar_conta/Criar_conta.jsx'
import Login from './Pages/Login/Login.jsx'
import PrivateRoute from './PrivateRoute.jsx'
import BemVindo from './Pages/bemvindo/BemVindo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inicio" element={<PrivateRoute><Inicio /></PrivateRoute>} />
        <Route path="/Inicio/NovaHistoria" element={<PrivateRoute><NovaHistoria /></PrivateRoute>} />
        <Route path="/Historia/:id" element={<PrivateRoute><Historia_gerada /></PrivateRoute>} />
        <Route path="/Configuracoes" element={<PrivateRoute><Configuracoes /></PrivateRoute>} />
        <Route path="/TipoPreferido" element={<PrivateRoute><Tipo_preferido /></PrivateRoute>} />
        <Route path="/PrimeiroAcesso" element={<PrivateRoute><BemVindo/></PrivateRoute>} />
        <Route path="/cadastro" element={<CriarConta />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

