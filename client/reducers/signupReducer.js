export default function signupReducer(state = {}, action) {
    switch(action.type) {
        case 'USER_SIGNUP':
            return {}
        case 'USER_REGISTRATION_FAILED':
            return Object.assign({}, state, { registration_status: action.payload.message })
        default:
            return state
    }
}
