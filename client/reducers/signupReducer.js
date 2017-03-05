export default function signupReducer(state = {}, action) {
    switch(action.type) {
        case 'USER_SIGNUP':
            return {}
        default:
            return state
    }
}