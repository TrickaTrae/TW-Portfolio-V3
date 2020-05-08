import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from "./private-route";
import NavBar from "../components/navbar/navbar";
import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import AdminPage from "../pages/admin-page/admin-page";
import SignUp from "../pages/sign-up/sign-up";
import SignIn from "../pages/sign-in/sign-in";
import '../-global-styles/animations.css'

export default () => (
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/sign-in' component={SignIn}/>
            <PrivateRoute path="/admin-page" component={AdminPage} />
        </Switch>
    </BrowserRouter>
)