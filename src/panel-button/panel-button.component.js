import React from 'react';

import './panel-button.styles.css';

const PanelButton = ({ loading }) => {
    return (
        <div className='panel-button-container'>
            <div className='main-light-bg'/>
            <div className={`red-button ${loading? 'blink' : ''}`}/>
            <div className={`yellow-button ${loading? 'blink' : ''}`}/>
            <div className={`green-button ${loading? 'blink' : ''}`}/>
        </div>
    )
}

export default PanelButton;