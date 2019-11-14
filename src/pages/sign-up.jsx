import React, { Component } from "react";
import '../styles/sign-up.css'

const projectURL = process.env.REACT_APP_PROJECT_URL;

class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            userSignUp: {}
        }
    }
    render() {
        return(
            <div id="sign_up" className="d-flex align-items-center justify-content-center">
                <div className="container sign-up-container">
                    <form onSubmit={this.handleSignUpSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control" id="user_name" placeholder="Username" maxLength="25" required value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })}/>
                            <input type="password" className="form-control mt-1" id="password" placeholder="Password" maxLength="25" required value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
                        </div>
                        <button type="submit" className="btn btn-success btn-lg submit-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    handleSignUpSubmit = e => {
        e.preventDefault();
        this.setState({ userSignUp: {
            userName: this.state.userName,
            password: this.state.password
        }}, () => {
            let data = JSON.stringify(this.state.userSignUp);
            fetch(projectURL, {
                method: 'post',
                mode: 'cors',
                body: data,
                headers: {
                    "Content-type" : "application/json"
                }
            }).then((response) => {
                if(response.ok){
                    alert("success");
                } else {
                    response.json().then(json => {
                        alert(JSON.stringify(json));
                    })
                }
            })
        })
    }

}
export default SignUp;