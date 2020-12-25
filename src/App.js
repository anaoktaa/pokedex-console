import React from 'react';

import LeftPanel from './left-panel/left-panel.component';
import RightPanel from './right-panel/right-panel.component';

import './App.css';

const App = () => {
    return (
        <div className='app'> 
            <div className='pokedex'>
                <LeftPanel/>
                <RightPanel/>
            </div>
        </div>
    );
}

export default App;