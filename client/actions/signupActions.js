import axios from 'axios'


export function userSignupRequest(userData) {
    return (dispatch) => {
        return axios.post('/register', {
            'email': userData.email,
            'password': userData.password,
            'givenName': userData.givenName,
            'surname': userData.surname
        }).then((response) => {
            window.location.href = '/'
        }).catch((error) => {
            let payload = (error.response) ? error.response.data : 'Oops! Something went wrong. Please try again in sometime.'
            dispatch({
                type: 'USER_REGISTRATION_FAILED',
                payload
            })
        })
    }
}
