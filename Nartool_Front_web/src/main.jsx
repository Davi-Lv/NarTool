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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Inicio/NovaHistoria" element={<NovaHistoria />} />        
        <Route path="/Historia/:id" element={<Historia_gerada />} />
        <Route path="/Configuracoes" element={<Configuracoes />} />
        <Route path="/TipoPreferido" element={<Tipo_preferido />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)