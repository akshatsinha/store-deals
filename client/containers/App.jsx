import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>WTF</h1>
                <button onClick={this.props.firstAction}>Button</button>
                <Link to="/register">Register</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        firstAction: () => {
            dispatch({
                type: 'FIRST_ACTION',
                payload: 'THIS IS THE PAYLOAD'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)