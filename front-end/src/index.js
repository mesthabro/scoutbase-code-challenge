import React from 'react'
import { render } from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ApolloProvider } from '@apollo/react-hooks'

import Home from './pages/home'
import Countries from './pages/countries'

import { Navbar } from './components/nav'
import { AppContainer } from './components/layoutElements'

import client from './apollo'

const history = createBrowserHistory();

const App = () => (
    <ApolloProvider client={client}>
        <Router history={history}>
            <Navbar>
                Scoutbase Assignment
            </Navbar>
            <AppContainer>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/countries" component={Countries} />
                </Switch>
            </AppContainer>
        </Router>
    </ApolloProvider>
)

render(<App />, document.querySelector('.root'))