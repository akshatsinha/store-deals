export default function loginReducer(state = {}, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return {}
        default:
            return state
    }
}