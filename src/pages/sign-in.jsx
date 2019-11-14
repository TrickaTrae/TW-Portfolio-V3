import React, { Component } from "react";
import '../styles/sign-in.css'

let URL;

if(process.env.NODE_ENV === "production"){
    URL = "https://shrouded-savannah-58703.herokuapp.com/users/sign-in";
}else if(process.env.NODE_ENV === "development"){
    URL = "http://localhost:3000/users/sign-in";
}

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            userSignIn: {}
        }
    }
    render() {
        return(
            <div id="sign_in" className="d-flex align-items-center justify-content-center">
                <div className="container sign-in-container">
                    <form onSubmit={this.handleSignInSubmit}>
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

    handleSignInSubmit = e => {
        e.preventDefault();
        this.setState({ userSignIn: {
            userName: this.state.userName,
            password: this.state.password
        }}, () => {
            let data = JSON.stringify(this.state.userSignIn);
            fetch(URL, {
                method: 'post',
                mode: 'cors',
                body: data,
                headers: {
                    "Content-type" : "application/json"
                }
            }).then(response => response.json()).then(json => {
                if(json.success){
                    localStorage.setItem("token", json.data._id)
                    this.props.history.push('/admin-page');
                } else {
                    alert(JSON.stringify(json));
                }
            })
        })
    }

}
export default SignIn;