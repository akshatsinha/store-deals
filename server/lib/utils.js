import Base64 from 'base64-js'
import { stringToBytes } from 'convert-string'

export function base64EncodeUsernamePwd(username, password) {
    // console.log('username: ', username)
    // console.log('password: ', password)
    // console.log("stringToBytes(username + ':' + password): ", stringToBytes(username + ':' + password))
    // console.log("Base64.encode(stringToBytes(username + ':' + password)): ", Base64.fromByteArray(stringToBytes(username + ':' + password)))
    return  Base64.fromByteArray(stringToBytes(username + ':' + password))
}
