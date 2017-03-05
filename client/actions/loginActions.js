import axios from 'axios'

export function userLoginRequest(userData) {
    return (dispatch) => {
        return axios.post('/login', {'login': userData.login, 'password': userData.password})
    }
}