import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    updateUsername = (username) => {
        this.setState({
            username: username
        })
    };
    updatePassword = (password) => {
        this.setState({
            password: password
        })
    };
    login = () => {
        this.props.setPage("home");
        this.setState({
            username: "",
            password: ""
        })
    };

    render() {
        return (
            <div className="Login">
                <header className="Login-header">
                    <span className="Login-title">
                        <img className="logo" src={require("./Don'tBeTrashy-01.png")} />
                    </span>
                    <input className="Login-username"
                           value={this.state.username}
                           onChange={(e) => {
                               this.updateUsername();
                           }}
                           placeholder="Username"
                    />
                    <input className="Login-username"
                           value={this.state.password}
                           onChange={() => {this.updatePassword()}}
                           placeholder="Password"
                           type="password"
                    />
                    <button className="Login-button"
                            onClick={() => {this.login()}}
                            onKeyDown={(e) => { if (e.keyCode === 13) this.login(); }}
                    >START RECYCLING</button>
                </header>
                <div className="Login-forgot">Forgot your password?</div>
            </div>
        );
    }
}

export default Login;
