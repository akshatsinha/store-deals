import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        this.props.userLoginRequest(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 text-center">
                            <h1>Log In</h1>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input
                                    type="text"
                                    value={this.state.login}
                                    onChange={this.onChange}
                                    name="login"
                                    className="form-control"
                                    placeholder="Email"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <button className="btn btn-primary btn-block">Login</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

LoginForm.propTypes = {
    userLoginRequest: React.PropTypes.func.isRequired
}
