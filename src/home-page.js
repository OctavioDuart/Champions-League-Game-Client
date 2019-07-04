import React, { Component } from 'react';
//import NavBarTop from './components/nav-bar-top/nav-bar-top';
import CardsEffects from './components/cards/cards-effects';
import BtnPlayGame from './components/btn-play-game/btn-start-game';
import Footer from './components/footer/footer';



class HomePage extends Component {
    render() {
        return (
            <>
                <CardsEffects />
                <BtnPlayGame />
                <Footer mt={'134%'} />
            </>
        );
    };
};

export default HomePage;