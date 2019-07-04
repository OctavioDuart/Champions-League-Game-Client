import React from 'react';

import './btn-play-game.css';


const BtnPlayGame = () => {

    const callFunction = () => {
        window.location.href = window.location.origin + '/form-game'
    }

    return (

        <button
            onClick={callFunction}
            id="button-go-game">
            Começar
            </button>

    );
};


export default BtnPlayGame;