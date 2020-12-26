import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LeftPanel from './left-panel/left-panel.component';
import RightPanel from './right-panel/right-panel.component';

import './App.css';

const App = () => {

    const [ initialPokemonId, setInitialPokemonId] = useState(1); 
    const [ loading, setLoading ] = useState(false); 
    const [ err, setErr ] = useState(null); 
    const [ pokemonDetailData, setPokemonDetailData ] = useState({
        name: null,
        id: null,
        abilities: [],
        description: null,
        sprites: null,
        stats: [],
        types: [],
        height: null,
        weight: null
    });  

    const handleOnNext = () => {
        console.log('next')
        setInitialPokemonId(Number(initialPokemonId)+1);
    }

    const handleOnPrev = () => {
        if (initialPokemonId <= 1) return;
        setInitialPokemonId(Number(initialPokemonId)-1);
        console.log('prev')   
    }

    const handleSubmit = id => {
        if (!id) return;
        setInitialPokemonId(id);
    }

    useEffect(() => {        
        const fetchData = () => {
            setLoading(true);
            setErr(null);
            setPokemonDetailData({
                name: null,
                id: null,
                abilities: [],
                description: null,
                sprites: null,
                stats: [],
                types: [],
                height: null,
                weight: null
            });
            axios.get(`https://pokeapi.co/api/v2/pokemon/${initialPokemonId}`).then((response) => {
                const array = response.data.abilities; 
                let abilitiesDetail = [];
                let promises = [];
                for (let i = 0; i < array.length; i++) {
                promises.push(
                    axios.get(response.data.abilities[i].ability.url).then(responseAbility => {
                        abilitiesDetail.push(responseAbility.data);
                    })
                )
                }
                
                Promise.all(promises).then(() => {
                    let allDescription = '';
                    abilitiesDetail.forEach((item) => {
                        item.effect_entries.forEach((effectEntry) => {
                            if (effectEntry.language.name === 'en') {
                                allDescription = allDescription + effectEntry.effect
                            }
                        })
                    })
        
                    setLoading(false);
                    setPokemonDetailData({
                        name: response.data.name,
                        id: response.data.id,
                        description: allDescription,
                        abilities: response.data.abilities,
                        sprites: response.data.sprites,
                        stats: response.data.stats,
                        types: response.data.types,
                        height: response.data.height,
                        weight: response.data.weight
                    })
                    
                }).catch((err) => {
                    setLoading(false);
                    const error = JSON.stringify(err);
                    const jsonErr = JSON.parse(error);
                    setErr(jsonErr.message);
                })

        
            
            }).catch((err) => {
                setLoading(false);
                const error = JSON.stringify(err);
                const jsonErr = JSON.parse(error);
                setErr(jsonErr.message);
            })
        }

        fetchData();
    }, [initialPokemonId])

    return (
        <div className='app'> 
            <div className='pokedex'>
                <LeftPanel
                    name={pokemonDetailData.name}
                    id={pokemonDetailData.id}
                    description={pokemonDetailData.description}
                    sprites={pokemonDetailData.sprites}
                    loading={loading}
                    error={err}
                />
                <RightPanel
                    stats={pokemonDetailData.stats}
                    types={pokemonDetailData.types}
                    height={pokemonDetailData.height}
                    weight={pokemonDetailData.weight}
                    onPrev={handleOnPrev}
                    onNext={handleOnNext}
                    loading={loading}
                    onSubmit={handleSubmit}
                    error={err}
                />
            </div>
        </div>
    );
}

export default App;