import '../../App.css'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Menu from '../../Components/Menu/Menu'

export default function HistoriaGerada() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loadingText, setLoadingText] = useState('Carregando');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prevText => {
        if (prevText === 'Carregando...') {
          return 'Carregando';
        } else {
          return prevText + '.';
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/story/${id}`);
        const data = await response.json();
        setStory(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!story) {
    return <div>{loadingText}</div>;
  }

  return (
    <>
      <Menu />
      {/* imagem gerada por IA */}
      <img src="" alt="IaGen" />
      <h2 className="titulo">{story.title}</h2>
      <div className="TodasDescricoes">
        <div className="premissa">
          <h3>Premissa</h3>
          <p className="descricaoPremissa">{story.premise}</p>
        </div>
        <div className="generoTema">
          <h3>Genero/tema</h3>
          <p className="descricaoGeneroTema">{story.genreAndTheme}</p>
        </div>
        <div className="regras">
          <h3>Sistema de regras e mecânicas</h3>
          <p className="descricaoRegras">{story.RulesAndMechanics}</p>
        </div>
        <div className="areaDeExploracao">
          <h3>Area de exploração</h3>
          <p className="descricaoAreaDeExploracao">{story.explorationArea}</p>
        </div>
      </div>
    </>
  )
}