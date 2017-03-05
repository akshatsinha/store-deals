import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import ReactStormpath from 'react-stormpath'

import routes from './routes'
import store from './store'


ReactStormpath.init({
    endpoints: {
        baseUri: 'https://store-deals.apps.stormpath.io'
    }
})


ReactDOM.render(
    <Provider store={store}>
        { routes }
    </Provider>, document.getElementById('root')
)
