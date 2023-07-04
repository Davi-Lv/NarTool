import '../../App.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Menu from '../../Components/Menu/Menu';
import IconDelete from '../../Assets/IconDelete.png';
import { MoonLoader } from 'react-spinners';

export default function Inicio() {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/DeleteHistory/${id}`, {
                method: 'DELETE',
            });
            setStories(stories.filter((story) => story.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteAll = async () => {
        try {
            await fetch('http://localhost:3000/DeleteAllStories', {
                method: 'DELETE',
            });
            setStories([]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/listAllStories');
                const data = await response.json();

                setTimeout(() => {
                    setStories(data);
                    setLoading(false);
                }, 600);
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
                <Link to="/Inicio/NovaHistoria" className="linkSubMenuInicio">
                    Criar campanha aleatoria
                </Link>
                <Link to="" className="linkSubMenuInicio">
                    Crie campanhas do seu jeito
                </Link>
                <Link to="/Configuracoes" className="linkSubMenuInicioPremiun">
                    Seja premiun
                </Link>
            </div>

            <div className="historicoDeCampanhas">
                <h1 className="tituloSeuHistoricoDeCampanhas">
                    Seu historico de campanhas <p onClick={handleDeleteAll}>Deletar tudo</p>
                </h1>
                <div className="campanhasCriadas">
                    {loading ? (
                        <div className="loadingContainer">
                            <MoonLoader color="#ffffff" loading={loading} size={30} />
                            <p>Carregando...</p>
                        </div>
                    ) : stories.length === 0 ? (
                        <p className="nenhumaCampanha">Nenhuma campanha no momento</p>
                    ) : (
                        stories.map((story) => (
                            <div className="campanha" key={story.id}>
                                <Link to={`/Historia/${story.id}`} className="linkCampanha">
                                    <h1 className="tituloCampanha">{story.title}</h1>
                                    <p className="visualizarCampanha">Visualize essa campanha</p>
                                </Link>
                                <button className="deleteCamapanha" onClick={() => handleDelete(story.id)}>
                                    <img src={IconDelete} alt="icone de deletar" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
