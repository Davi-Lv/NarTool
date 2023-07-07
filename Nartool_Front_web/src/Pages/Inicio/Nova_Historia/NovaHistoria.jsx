import React, { useState } from 'react';
import axios from 'axios';
import Brilho from '../../../assets/brilho.svg';
import Menu from '../../../Components/Menu/Menu';
import { MoonLoader } from 'react-spinners';
import ArrowBack from '../../../assets/arrowBack.svg';

export default function NovaHistoria() {
    const [story, setStory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const createNewStory = async () => {
        try {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const email = localStorage.getItem('email');
    
            const response = await axios.post('http://localhost:3000/CreateNewStory', null, {
                headers: {
                    email: email,
                },
            });
            const data = response.data;
            setStory(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const generateAgain = () => {
        createNewStory();
    };

    return (
        <div>
            <Menu />
            {isLoading ? (
                <div className='centralizado'>
                    <MoonLoader color="#E38744" loading={isLoading} size={50} />
                </div>
            ) : story ? (
                <div className='historiaGerada'>
                    <div className="genBack">
                        <button className="back" onClick={() => window.history.back()}>
                            <img src={ArrowBack} alt="icone voltar" />
                            Voltar
                        </button>
                        <button className="back" onClick={generateAgain}>
                            Gerar novamente
                        </button>
                    </div>
                    <h2 className='tituloHistoriaGen'>{story.title}</h2>
                    <div className="historiaInfo">
                        <div className="Premissa">
                            <h4>Premissa </h4>
                            <p className='premiseHistoriaGen'>{story.premise}</p>
                        </div>
                        <div className="GeneroTema">
                            <h4>Gênero/tema</h4>
                            <p className='generoETemaGen'>{story.genreAndTheme}</p>
                        </div>
                        <div className="sistemaDeRegras">
                            <h4>Sistema de regras e mecânicas</h4>
                            <p className='regrasDaHistoria'>{story.RulesAndMechanics}</p>
                        </div>
                        <div className="areaDeExploracao">
                            <h4>Área de exploração</h4>
                            <p className='areaDeExploracaoGen'>{story.explorationArea}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='gerarHistoria'>
                    <h1 className='novaHistoria'>Nova História</h1>
                    <button className='botaoCriar' onClick={createNewStory}>
                        Criar Nova História
                        <img src={Brilho} alt="Icone de Brilho" />
                    </button>
                </div>
            )}
        </div>
    );
}
