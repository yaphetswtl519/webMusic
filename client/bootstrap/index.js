'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import rab, { call } from 'rabjs';
import { Route, Switch, routerRedux } from 'rabjs/router';
const { ConnectedRouter: Router } = routerRedux;
import Index from '../modules/index';
import Musician from '../modules/musician';
import index from '../models/index';
console.log(Musician)
export default class Bootstrap {
    static getSigngleton() {
        return globalSingleton;
    }
    initModels() {
        this.app.addModel(index);
    }
    initApp() {
        this.app = rab({
            debug: true,
            initialState: {}
        });
        this.initModels();
        this.app.router(( {history} ) => {
            return (
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Index}></Route>
                        <Route path="/musician/:name" component={Musician}></Route>
                    </Switch>
                </Router>
            );
        });
        this.provider = this.app.start();
    }
    renderApp() {
        ReactDOM.render(
            React.createElement(this.provider),
            document.getElementById('music-container')
        );
    }
    init() {
        this.initApp();
        this.renderApp();
    }
}
const globalSingleton = new Bootstrap();