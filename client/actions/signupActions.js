import axios from 'axios'

export function userSignupRequest(userData) {
    return (dispatch) => {
        return axios.post('/register', {
            'email': userData.email,
            'password': userData.password,
            'givenName': userData.givenName,
            'surname': userData.surname
        }).then((response) => {
            if (response.status >= 200 && response.status < 300) window.location.href = '/'
        })
    }
}
