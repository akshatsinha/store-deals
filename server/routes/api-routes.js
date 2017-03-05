"use strict";

import express from 'express'
import axios from 'axios'

import { base64EncodeUsernamePwd } from '../lib/utils'
import { URL_REGISTER_NEW_USER, ADMIN_API_AUTH_KEY_BASE64_ENCODED, URL_LOGIN_USER } from '../lib/stormpath-helpers'

const router  = express.Router()

router.post('/signup', (req, res) => {
    axios({
        method: 'post',
        url: URL_REGISTER_NEW_USER,
        data: req.body.userData,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + ADMIN_API_AUTH_KEY_BASE64_ENCODED
        }
    }).then((response) => {
        let apiResp = response.data // comes back with the entire user object, might want to cache?
        console.log('Successfully created account for: ', req.body.userData.email, apiResp)
        res.status(response.status)
    }).catch((error) => {
        let apiResp = error.response.data
        console.log('Oops! Could not create the account for: ', req.body.userData.email, apiResp)
        res.status(apiResp.status).send({code: apiResp.code, message: apiResp.message, developerMessage: apiResp.developerMessage})
    })
})


// router.post('/login', (req, res) => {
//     console.log('===================> ', req.body.userData)
//     axios({
//         method: 'post',
//         url: URL_LOGIN_USER,
//         data: {
//             'type': 'basic',
//             'value': base64EncodeUsernamePwd(req.body.userData.email, req.body.userData.password)
//         },
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Basic ' + ADMIN_API_AUTH_KEY_BASE64_ENCODED
//         }
//     }).then((response) => {
//         console.log('==== respo: ', response)
//         res.status(response.status)
//     }).catch((error) => {
//         console.log('==== error: ', error)
//         res.status(error.response.data.status)
//     })
// })


module.exports = router