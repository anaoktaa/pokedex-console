import React, { useState, useEffect } from 'react';

import PanelButton from '../panel-button/panel-button.component';

import './left-panel.styles.css';

const LeftPanel = ({ id, name, description, sprites, loading, error }) => {
    const [ defaultSprites, setDefaultSprites ]= useState(null);
    const [ defaultRotate, setDefaultRotate ] = useState('front'); 
    const [ defaultShiny, setDefaultShiny ] = useState(''); 
    const [ defaultGender, setDefaultGender ] = useState(''); 
    const [ initialId, setInitialId ] = useState(null); 

    const handleRotate = () => {
        if (defaultRotate === 'front') {
            setDefaultRotate('back');
        }
        else {
            setDefaultRotate('front');
        }
    }

    const handleShiny = () => {
        if (defaultShiny) {
            setDefaultShiny('');
        }
        else  {
            setDefaultShiny('_shiny');
        }
    }

    const handleChangeGender = () => {
        if (!sprites.back_female) return;
        if (!sprites.front_female) return;

        if (defaultGender === '') {
            setDefaultGender('_female');
        }
        else {
            setDefaultGender('');
        }
    }

    useEffect(() => {
        const changeSprites = () => {
            if (!sprites) return;
            let name = null;
            if (id === initialId ) {
                if (defaultShiny || defaultGender) {
                    name = defaultRotate + defaultShiny +defaultGender;
                }
                else {
                    name = defaultRotate + '_default';
                }
            }
            else {
                setInitialId(id);
                setDefaultRotate('front');
                setDefaultShiny('');
                setDefaultGender('');
                name = 'front_default';
            }
            setDefaultSprites(sprites[name]);
        }

        changeSprites();
    }, [sprites, id, initialId, defaultRotate, defaultGender, defaultShiny])

    return (
        <div className='left-panel'>
            <div className='row'>
                <div className='left-curve'>
                    <PanelButton
                        loading={loading}
                    />
                    <div className='panel-border-bottom'/>
                    <div className='triangle-square'>
                        <div className='triangle-border'/>
                    </div>
                </div>
                <div className='right-curve'>
                    <div className='panel-border-right-bottom '/>
                </div>
            </div>
         
            <div className='left-panel-wrapper-screen'>
                <div className='panel-container-left'>
                    <div className='screen-left-panel-wrapper'>
                        <div className='background-3'>
                            {
                                loading? 
                                <p className='pokemon-name-id' >Loading ... </p>
                                :
                                error?
                                <p className='pokemon-name-id'>{error} </p>
                                :
                                <p className='pokemon-name-id'>  {name} No. {id}</p>
                            }
                           
                        </div>
                        <div className='pokemon-screen background-1 '>
                            {
                                loading?
                                <p className='pokemon-name-id fs-35 fw-bold' >Loading ... </p>
                                :
                                error?
                                <p className='pokemon-name-id fs-35 fw-bold' >{error}</p>
                                :
                                <img className='pokemon-sprites' src={defaultSprites} alt='pokemon' />
                            }
                    
                        </div>
                        <div className='control-panel'>
                            <div className={`control ${defaultGender === '_female' ? ' sprite-control-selected' : ''}`} onClick={handleChangeGender}>
                                <i class="fas fa-venus"></i>
                            </div>
                            <div  className={`shiny-button ${defaultShiny === '_shiny' ? ' sprite-control-selected' : ''}`} onClick={handleShiny}>
                                Shiny
                            </div>
                            <div className={`control ${defaultRotate === 'back' ? ' sprite-control-selected' : ''}`} onClick={handleRotate}>
                                <i class="fas fa-undo-alt"></i>
                            </div>
                        </div>
                        <div className='background-3 pokemon-desc '>
                            {
                                loading?
                                <p className='pokemon-name-id fs-24 fw-bold ta-center' >Loading ... </p>
                                :
                                error? 
                                <p className='pokemon-name-id fs-24 fw-bold ta-center' >{error}</p>
                                : 
                                description
                            }
                        
                        </div>               
                    </div>
                </div>
                <div className='hinge'>
                    <div className='border-short'/>
                    <div className='gap'/>
                    <div className='border'/>
                    <div className='gap'/>
                    <div className='border-short'/>
                
                </div>
            </div>
         
      
        </div>
    );
}

export default LeftPanel