import '../../App.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Menu from '../../Components/Menu/Menu'
import IconDelete from '../../Assets/IconDelete.png'

export default function Inicio() {
    const [stories, setStories] = useState([]);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/DeleteHistory/${id}`, {
                method: 'DELETE',
            });
            setStories(stories.filter(story => story.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listAllStories');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Menu />

            <div className="subMenuInicio">
                <Link to="/Inicio/NovaHistoria" className="linkSubMenuInicio">Criar campanha aleatoria</Link>
                <Link to="" className="linkSubMenuInicio">Crie campanhas do seu jeito</Link>
                <Link to="" className="linkSubMenuInicioPremiun">Seja premiun</Link>
            </div>

            <div className="historicoDeCampanhas">
                <h1 className="tituloSeuHistoricoDeCampanhas">Seu historico de campanhas</h1>
                <div className="campanhasCriadas">
                    {stories.map(story => (
                        <div className="campanha" key={story.id}>
                            <Link to={`/Historia/${story.id}`} className="linkCampanha" >
                                <div className='flexColumn'>
                                    <h1 className="tituloCampanha">{story.title}</h1>
                                    <p className="visualizarCampanha">Visualize essa campanha</p>
                                </div>
                            </Link>
                            <button
                                className="deleteCamapanha"
                                onClick={() => handleDelete(story.id)}
                            >
                                <img src={IconDelete} alt='icone de deletar' />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
