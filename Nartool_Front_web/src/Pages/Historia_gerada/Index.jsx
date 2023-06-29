import '../../App.css'
import { Link } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'

export default function Historia_gerada() {
  return (
    <>
      <Menu />
      Historia gerada
      {/* imagem gerada por IA */}
      <img src="" alt="IaGen" />
      <h2 className="titulo">teste</h2>
      <div className="TodasDescricoes">
        <div className="premissa">
          <h3>Premissa</h3>
          <p className="descricaoPremissa">descricao</p>
        </div>
        <div className="generoTema">
          <h3>Genero/tema</h3>
          <p className="descricaoGeneroTema">descricao</p>
        </div>
        <div className="regras">
          <h3>Sistema de regras e mecânicas</h3>
          <p className="descricaoRegras">descricao</p>
        </div>
        <div className="areaDeExploracao">
          <h3>Area de exploração</h3>
          <p className="descricaoAreaDeExploracao">descricao</p>
        </div>
      </div>
    </>
  )
}
