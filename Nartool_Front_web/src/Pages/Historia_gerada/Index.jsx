import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';
import ArrowBack from '../../assets/arrowBack.svg';

export default function HistoriaGerada() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loadingText, setLoadingText] = useState('Carregando');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prevText) => {
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
      <h2 className="tituloHistoriaGen">
        <button className="back" onClick={() => window.history.back()}>
          <img src={ArrowBack} alt="icone voltar" />
          Voltar
        </button>
        {story.title}
      </h2>
      <div className="historiaInfo">
        <div className="Premissa">
          <h4>Premissa</h4>
          <p className="premiseHistoriaGen">{story.premise}</p>
        </div>
        <div className="GeneroTema">
          <h4>Gênero/tema</h4>
          <p className="generoETemaGen">{story.genreAndTheme}</p>
        </div>
        <div className="sistemaDeRegras">
          <h4>Sistema de regras e mecânicas</h4>
          <p className="regrasDaHistoria">{story.RulesAndMechanics}</p>
        </div>
        <div className="areaDeExploracao">
          <h4>Área de exploração</h4>
          <p className="areaDeExploracaoGen">{story.explorationArea}</p>
        </div>


        
      </div>
    </>
  );
}
