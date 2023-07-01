import React, { useState } from 'react';
import axios from 'axios';

export default function NovaHistoria() {
    const [story, setStory] = useState(null);

    const createNewStory = async () => {
        try {
            const response = await axios.post('http://localhost:3000/CreateNewStory');
            const data = response.data;
            setStory(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>

            {story ? (
                <div>
                    <h2>{story.title}</h2>
                    <p>{story.id}</p>
                    <p>{story.premise}</p>
                    <p>{story.genreAndTheme}</p>
                    <p>{story.RulesAndMechanics}</p>
                    <p>{story.explorationArea}</p>
                </div>
            ) : (
                <div>
                    <h1>Nova História</h1>
                    <button onClick={createNewStory}>iconDeIaGenOuBrilhinho Criar Nova História</button>
                </div>
            )}
        </div>
    );
}
