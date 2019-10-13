import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Home from './pages/home'

import { Navbar } from './components/nav'
import { AppContainer } from './components/layoutElements'

const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <Navbar>
            Scoutbase Assignment
        </Navbar>
        <AppContainer>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </AppContainer>
    </Router>
)

render(<App />, document.querySelector('.root'))