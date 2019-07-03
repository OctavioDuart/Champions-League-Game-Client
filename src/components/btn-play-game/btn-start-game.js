import React from 'react';
import './btn-play-game.css';


const BtnPlayGame = () => {

    const callFunction = () => {
        console.log("Hello")
    }

    return (
        <button onClick={callFunction}>Começar</button>
    );
};


export default BtnPlayGame;