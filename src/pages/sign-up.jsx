import React, { Component } from "react";
import '../styles/sign-up.css'

let URL;

if(process.env.NODE_ENV === "production"){
    URL = "https://shrouded-savannah-58703.herokuapp.com/users";
}else if(process.env.NODE_ENV === "development"){
    URL = "http://localhost:3000/users";
}

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
                            <input type="text" className="form-control" id="user_name" placeholder="Username" value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })}/>
                            <input type="text" className="form-control mt-1" id="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })}/>
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

            fetch(URL, {
                method: 'post',
                mode: 'cors',
                body: data,
                headers: {
                    "Content-type" : "application/json"
                }
            }).then((response) => {
                if(response.ok){
                    console.log("user successfully created!", response);
                }
            })
            
        })
    }

}
export default SignUp;