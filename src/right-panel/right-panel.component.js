import React from 'react';

import './right-panel.styles.css';

const RightPanel = () => {

    
    const padStats =  (stat, val, sep, len) => {
        val = val || "xx";
        let output = `
        ${stat.toString()}${sep.repeat(len - (val.toString().length + stat.toString().length))}${val.toString()}`;
        return output;
    }

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
                                <p>{padStats("Hp", 45, ".", 26)}</p>
                                <p>{padStats("Attack", 98, ".", 26)}</p>
                                <p>{padStats("Defense", 76, ".", 26)}</p>
                                <p>{padStats("Special Attack", 78, ".", 26)}</p>
                                <p>{padStats("Special Defense", 55, ".", 26)}</p>
                                <p>{padStats("Speed", 60, ".", 26)}</p>
                            </div>
                        </div>
                        <div className='flex-column'>
                            <div className='types-panel'>
                                TYPES
                            </div>
                            <div className='background-2 types-container'>
                                <div className='types'>
                                    TYPES
                                </div>
                                <div className='types'>
                                TYPES
                            </div>
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
                                <p>84 lbs</p>                                    
                            </div>
                        </div>
                        <div className='height-weight-container'>
                            <div className='input-search'>
                                <p>Height</p>
                                <p>84 lbs</p>                                    
                            </div>
                        </div>
                    </div>
                    <div className='control-container'>
                        <div className='button-control'/>
                        <div>
                            <input type='number' className='input-number green-screen'/>
                            <div className='submit'/>
                        </div>
                        <div className='button-control'/>
                    </div>
                 
                </div>
            </div>
          
         
        </div>

    );
}

export default RightPanel;