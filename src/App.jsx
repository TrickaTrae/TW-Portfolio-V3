import React, { Component } from "react";
import { connect } from 'react-redux';
import { verifyUser } from './-global-state/actions/user-actions';
import { fetchMediumPosts } from './-global-state/actions/blog-actions';
import Routes from "../src/routing/routes.jsx";

class App extends Component {
  componentDidMount = () => {
    this.props.verifyUser(localStorage.getItem("token"));
    this.props.fetchMediumPosts();
  }
  render() {
    return ( 
      <Routes />
     );
  }
}
export default connect(null, { verifyUser, fetchMediumPosts })(App);