import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm.jsx'
import { userLoginRequest } from '../actions/loginActions'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <LoginForm userLoginRequest={this.props.userLoginRequest} />
            </div>
        )
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}

export default connect((state) => {return {}}, { userLoginRequest })(LoginPage)
