import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Brilho from '../../assets/brilho.svg';
import Menu from '../../Components/Menu/Menu';
import { MoonLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import '../../App.css';


export default function BemVindo() {
    const [story, setStory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');


    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
          setEmail(storedEmail);
        }
      }, []);

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

    return (
        <div>
            {isLoading ? (
                <div className='centralizado'>
                    <MoonLoader color="#E38744" loading={isLoading} size={50} />
                </div>
            ) : story ? (
                <>
                    <Menu />
                    <div className='historiaGerada bemvindo'>
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
                    <Link className='bemvindoITI' to="/Inicio">Ir para tela inicial</Link>
                </>
            ) : (
                <div className='primeiraVez gerarHistoria'>
                    <h1 className='novaHistoria'>Seja Bem Vindo!</h1>
                    <button className='botaoCriar' onClick={createNewStory}>
                        Gere sua primeira campanha
                        <img src={Brilho} alt="Icone de Brilho" />
                    </button>
                </div>
            )}
        </div>
    );
}
