import React, { useState } from 'react';

import './right-panel.styles.css';

const RightPanel = ({ stats, types, height, weight, onNext, onPrev, loading, onSubmit, error }) => {

    const [ defaultInput, setDefaultInput ] = useState('');

    const handleNext = () => {
        onNext();
    }

    const handlePrev = () => {
        onPrev()
    }

    const handleSubmit = () => {
        onSubmit(defaultInput);
    }

    const handleChange = (event) => {
        setDefaultInput(event.target.value)
    }
    
    const padStats =  (stat, val, sep, len) => {
        val = val || "xx";
        let output = `
        ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
        return output;
    }

    console.log('default input ',defaultInput)

    return (
        <div className='right-panel'>
            <div className='yellow-background-clear'/>
            <div className='right-clear'/>
            <div className='row'>
                <div className='left-panel-curve'> 
                    <div className='triangle-square-right'>
                        <div className='triangle-border'/>
                    </div>                
                </div>
                <div className='right-panel-curve'>
                    <div className='right-panel-curve-clear'/>
                </div>
            </div>
            <div className='panel-container-all'>
                <div className='screen-right-panel-wrapper'>
                    <div className='panel-row padding-10'>
                        <div style={{width: '50%'}} className='pokemon-panel-name background-2 '>
                            <div className='statics-container'>
                                {
                                    loading?
                                        <p className='pokemon-name-id fs-35 fw-bold' >Loading ... </p>
                                    :
                                    error?
                                        <p className='pokemon-name-id fs-24 fw-bold' > {error} </p>
                                    :
                                    stats.map((item) => (
                                        <p key={item.stat.name} className='stat-text'>{padStats(item.stat.name, item.base_stat, ".", 26)}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='flex-column'>
                            <div className='types-panel'>
                                TYPES
                            </div>
                            <div className='background-2 types-container'>
                                {
                                    loading?
                                        <p className='pokemon-name-id' >Loading ... </p>
                                    :
                                    error?
                                        <p className='pokemon-name-id' >{error}</p>
                                    :
                                    types.map((typeItem) => (
                                        <div key={typeItem.type.name} className={`types ${typeItem.type.name}`}>
                                            {typeItem.type.name}
                                        </div>
                                    ))
                                }                           
                            </div>
                        </div>
                    </div>
                    <div className='button-blue-container'>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                        <div className='blue-button'/>
                    </div>
                    <div className='hw-wrapper padding-10'>
                        <div className='height-weight-container'>
                            <div className='input-search'>
                                <p>Height</p>
                                {
                                    loading?
                                    <p>Loading ... </p>  
                                    :
                                    error?
                                    <p>404 Not Found</p> 
                                    :
                                    <p>{height} Meter</p> 
                                }
                                                                
                            </div>
                        </div>
                        <div className='height-weight-container'>
                            <div className='input-search'>
                                <p>Weight</p>
                                {
                                    loading?
                                    <p>Loading ... </p>   
                                    :
                                    error?
                                    <p>404 Not Found</p> 
                                    :
                                    <p>{weight} Kg</p>   
                                }                                 
                            </div>
                        </div>
                    </div>
                    <div className='control-container'>
                        <div className='button-control' onClick={handlePrev}/>
                        <div>
                            <input value={defaultInput} onChange={handleChange} placeholder='ID' min={1} type='number' className='input-number gray-screen'/>
                            <div onClick={handleSubmit} className='submit'/>
                        </div>
                        <div className='button-control' onClick={handleNext}/>
                    </div>
                 
                </div>
            </div>
          
         
        </div>

    );
}

export default RightPanel;