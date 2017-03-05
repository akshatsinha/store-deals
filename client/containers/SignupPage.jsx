import React from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/SignupForm.jsx'
import { userSignupRequest } from '../actions/signupActions'

class SignupPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userSignupRequest } = this.props
        return (
            <SignupForm userSignupRequest={userSignupRequest}/>
        )
    }
}


SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}


export default connect((state) => {return {}}, { userSignupRequest })(SignupPage)
