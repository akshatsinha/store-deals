import React from 'react'
import { Router } from 'react-stormpath'
import { Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App.jsx'
import SignupPage from './containers/SignupPage.jsx'
import LoginPage from './containers/LoginPage.jsx'

export default (
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={App} />
            <Route path="register" component={SignupPage} />
            <Route path="login" component={LoginPage} />
        </Route>
    </Router>
)
