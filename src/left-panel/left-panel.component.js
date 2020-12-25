import React from 'react';

import PanelButton from '../panel-button/panel-button.component';

import './left-panel.styles.css';

const LeftPanel = () => {
    return (
        <div className='left-panel'>
            <div className='row'>
                <div className='left-curve'>
                    <PanelButton/>
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
                            Pikachu No 12
                        </div>
                        <div className='pokemon-screen background-1 '>

                        </div>
                        <div className='control-panel'>
                            <div className='control'>
                                <i class="fas fa-venus"></i>
                            </div>
                            <div className='shiny-button'>
                                Shiny
                            </div>
                            <div className='control'>
                                <i class="fas fa-undo-alt"></i>
                            </div>
                        </div>
                        <div className='background-3 pokemon-desc '>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
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