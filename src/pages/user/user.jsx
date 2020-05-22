import React, { Component } from "react";
import './user.css'

class User extends Component {
    constructor(){
        super();
        this.state = {
            signUpUserName: '',
            signUpPassword: '',
            userSignUp: {},
            signInUserName: '',
            signInPassword: '',
            userSignIn: {}
        }
    }

    displaySignUpForm = () => {
        return (
            <form className="my-form border border-dark" onSubmit={this.handleSignUpSubmit}>
                <h1 className="text-white display-4">Sign Up</h1>
                <div className="form-group">
                    <input type="text" className="form-control bg-dark text-white" id="signUpUserName" placeholder="Username" maxLength="25" required 
                        value={this.state.signUpUserName} 
                        onChange={e => this.setState({ signUpUserName: e.target.value })}
                    />
                    <input type="password" className="form-control mt-1 bg-dark text-white" id="signUpPassword" placeholder="Password" maxLength="25" required 
                        value={this.state.signUpPassword} 
                        onChange={e => this.setState({ signUpPassword: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg submit-button">Submit</button>
            </form>
        )
    }

    displaySignInForm = () => {
        return (
            <form className="my-form border border-dark" onSubmit={this.handleSignInSubmit}>
                <h1 className="text-white display-4">Sign In</h1>
                <div className="form-group">
                    <input type="text" className="form-control bg-dark text-white" id="signInUserName" placeholder="Username" maxLength="25" required 
                        value={this.state.signInUserName} 
                        onChange={e => this.setState({ signInUserName: e.target.value })}
                    />
                    <input type="password" className="form-control mt-1 bg-dark text-white" id="signInPassword" placeholder="Password" maxLength="25" required 
                        value={this.state.signInPassword} 
                        onChange={e => this.setState({ signInPassword: e.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg submit-button">Submit</button>
            </form>
        )
    }

    render() {
        return(
            <div id="user" className="d-flex align-items-center justify-content-center">
                <div className="container fade-in-fwd">
                    <div className="row">
                        <div className="col-12 col-md-6 p-2">
                            {this.displaySignUpForm()}
                        </div>
                        <div className="col-12 col-md-6 p-2">
                            {this.displaySignInForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleSignUpSubmit = e => {
        e.preventDefault();
        this.setState({ userSignUp: {
            userName: this.state.signUpUserName,
            password: this.state.signUpPassword
        }}, () => {
            fetch(process.env.REACT_APP_SIGNUP_URL, {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(this.state.userSignUp),
                headers: {
                    "Content-type" : "application/json"
                }
            }).then(response => response.json()).then(json => {
                alert(json.message);
                this.setState({
                    signUpUserName: '',
                    signUpPassword: '',
                    userSignUp: {}
                })
            })
        })
    }

    handleSignInSubmit = e => {
        e.preventDefault();
        this.setState({ userSignIn: {
            userName: this.state.signInUserName,
            password: this.state.signInPassword
        }}, () => {
            fetch(process.env.REACT_APP_SIGNIN_URL, {
                method: 'post',
                mode: 'cors',
                body: JSON.stringify(this.state.userSignIn),
                headers: {
                    "Content-type" : "application/json"
                }
            }).then(response => response.json()).then(json => {
                if(json.success){
                    localStorage.setItem("token", json.data._id)
                }
                alert(json.message);
                this.setState({
                    signInUserName: '',
                    signInPassword: '',
                    userSignIn: {}
                })
            })
        })
    }

}
export default User;