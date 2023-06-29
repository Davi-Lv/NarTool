import '../../App.css'
import { Link } from 'react-router-dom'
import Menu from '../../Components/Menu/Menu'
import IconDelete from '../../Assets/IconDelete.png'

export default function Inicio() {
    return (
        <div>
            <Menu />

            <div className="subMenuInicio">
                <Link to="" className="linkSubMenuInicio">Criar campanha aleatoria</Link>
                <Link to="" className="linkSubMenuInicio">Crie campanhas do seu jeito</Link>
                <Link to="" className="linkSubMenuInicio">Seja premiun</Link>
            </div>

            <div className="historicoDeCampanhas">
                <h1 className="tituloSeuHistoricoDeCampanhas">Seu historico de campanhas</h1>
                <div className="campanhasCriadas">
                    <div className="campanha">
                        <Link to="/" className="linkCampanha" >
                            <div className='flexColumn'>
                                <h1 className="tituloCampanha">testando testetestando testetestando testetestando teste</h1>
                                <p className="visualizarCampanha">Visualize essa campanha</p>
                            </div>
                        </Link>
                        <button className="deleteCamapanha">
                            <img src={IconDelete} alt='icone de deletar' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
