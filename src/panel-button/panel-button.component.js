import React from 'react';

import './panel-button.styles.css';

const PanelButton = ({ loading }) => {
    return (
        <div className='panel-button-container'>
            <div className='main-light-bg'>
                <div className='main-light'>
                    <div className='main-light-shine'>
                        <div className='main-light-shiner'>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`red-button ${loading? 'blink' : ''}`}>
                <div className='red-button-inner'>

                </div>
            </div>
            <div className={`yellow-button ${loading? 'blink' : ''}`}>
                <div className='yellow-button-inner'>

                </div>
            </div>
            <div className={`green-button ${loading? 'blink' : ''}`}>
                <div className='green-button-inner'>

                </div>
            </div>
        </div>

    )
}

export default PanelButton;