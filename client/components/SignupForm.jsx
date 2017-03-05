import React, { Component } from 'react'

export default class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            givenName: '',
            surname: ''
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
        this.props.userSignupRequest(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4 text-center">
                            <h1>Sign Up!</h1>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input
                                    type="text"
                                    value={this.state.givenName}
                                    onChange={this.onChange}
                                    name="givenName"
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input
                                    type="text"
                                    value={this.state.surname}
                                    onChange={this.onChange}
                                    name="surname"
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <input
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                    name="email"
                                    className="form-control"
                                    placeholder="Email (this will be your username)"
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
                                <button className="btn btn-primary btn-block">Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired
}
