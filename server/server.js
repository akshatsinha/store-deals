"use strict";

import express from 'express'
import path from 'path'
import ora from 'ora'
import stormpath from 'express-stormpath'
import bodyParser from 'body-parser'

import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import apiRoutes from './routes/api-routes'

import { URL_APPLICATION_HREF, ADMIN_ACCOUNT_API_ID, ADMIN_ACCOUNT_API_SECRET } from './lib/stormpath-helpers'

// setx STORMPATH_CLIENT_APIKEY_ID 3QIEZ7NIZZW2ZTSAYG2TT56WL
// setx STORMPATH_CLIENT_APIKEY_SECRET rQD9KV8AX4gjWk77Xg4cqTTsQ1XhhHBqcKPcx7erYIg
// setx STORMPATH_APPLICATION_HREF https://api.stormpath.com/v1/applications/wwopVKreLQC1ada5g6NnN

let port = process.env.PORT || 3000;
let app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const compiler = webpack(webpackConfig)
app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    noInfo: false // eliminate noise from webpack
}))
app.use(webpackHotMiddleware(compiler))


app.use(stormpath.init(app, {
    apiKey: {
        id: ADMIN_ACCOUNT_API_ID,
        secret: ADMIN_ACCOUNT_API_SECRET
    },
    application: {
        href: URL_APPLICATION_HREF
    },
    debug: 'info',
    web: {
        produces: ['application/json'], // DO NOT REMOVE. this is to override using SP's templates
        // spa: {
        //     enabled: true,
        //     view: path.join(__dirname, '../client/index.html')
        // },
        // login: {
        //     enabled: true,
        //     uri: '',
        //     nextUri: '/dashboard'
        // },
        // logout: {
        //     enabled: true
        // },
        // me: {
        //     enabled: false
        // },
        // oauth2: {
        //     enabled: false
        // },
        // register: {
        //     enabled: false
        // }
    },
    postLoginHandler: function(account, req, res, next) {
        console.log('User: ', account.email, ' just logged in!')
        res.redirect(302, '/dashboard')
    },
    // postRegistrationHandler: function (account, req, res, next) {
    //     res.redirect(302, '/')
    // }

}))


// Routes
app.use('/css', express.static(path.join(__dirname, '../client')))
app.use('/api', apiRoutes)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})




const spinner = ora({
    interval: 100
});
function failAndExit(err) {
    spinner.fail();
    console.error(err.stack);
    process.exit(1);
}
spinner.text = 'Starting Dev Sever on port ' + port, spinner.start()
app.on('error', failAndExit)
app.on('stormpath.error', failAndExit)

// Start server
app.listen(port, function () {
    spinner.succeed();
    spinner.text = 'Initializing Stormpath';
    spinner.start();
    app.on('stormpath.ready', function () {
        spinner.succeed();
        console.log('\nListening at http://localhost:' + port);
        // Now bring back error logging.
        app.get('stormpathLogger').transports.console.level = 'info';
    });
});
