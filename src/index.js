import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



// Views
import HomePage from './home-page';
import FormGame from './containers/form-game/form-game-index';






ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={() => <HomePage />} />
                <Route path="/form-game" render={() => <FormGame />} />
            </Switch>
        </BrowserRouter>
    </>
    , document.getElementById('root')
);

