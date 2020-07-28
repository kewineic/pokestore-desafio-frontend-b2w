import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/index';
import HomeFire from './pages/Home-Fire/index';
import HomeWater from './pages/Home-Water/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/fire" exact component={HomeFire} />
                <Route path="/water" exact component={HomeWater} />
            </Switch>
        </BrowserRouter>
    );
};
