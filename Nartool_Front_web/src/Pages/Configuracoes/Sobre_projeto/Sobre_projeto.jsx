import '../../../App.css'
import LogoDM from '../../../assets/LogoDM.svg'
import { Link } from 'react-router-dom'

export default function Sobre_projeto() {

    return (
        <div className='sobreProjetoText'>
            <h1>Nartool - Ferramenta para Narradores de RPG</h1>
            <p>
                O Nartool é uma ferramenta em desenvolvimento para auxiliar
                narradores de RPG de mesa, com uma abordagem inovadora, essa
                ferramenta utiliza inteligência artificial (IA) para aprimorar
                o processo de narração, tornando-o mais fácil a criação de
                historias.
            </p>
            <p>
                O objetivo do Nartool é proporcionar uma experiência de
                narrativa aprimorada, permitindo que os narradores se
                concentrem no desenvolvimento da história e no envolvimento
                dos jogadores. Com a combinação da tecnologia de IA e a
                criatividade dos narradores, o Nartool oferece excelentes
                historias geradas e nunca vistas antes para seus jogos de RPG.
            </p>
            <div className="desenvolvedor">
                <img src={LogoDM} alt="marca Davi Mordonho" />
                <p>Desenvolvido por: <a target='_blank' href="https://github.com/Davi-Lv">Davi M.</a></p>
            </div>
        </div>
    )
}
