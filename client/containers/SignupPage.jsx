import React from 'react'
import { connect } from 'react-redux'
import SignupForm from '../components/SignupForm.jsx'
import { userSignupRequest } from '../actions/signupActions'

class SignupPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { userSignupRequest, registration_status } = this.props
        return (
            <div>
                <SignupForm userSignupRequest={userSignupRequest} registration_status={registration_status} />
            </div>
        )
    }
}


SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    registration_status: React.PropTypes.string
}


const mapStateToProps = (state) => {
    return {
        registration_status: state.signup.registration_status
    }
}


export default connect(mapStateToProps, { userSignupRequest })(SignupPage)
