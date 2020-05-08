import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from "./private-route";
import Home from "../pages/home/home";
import AdminPage from "../pages/admin-page";
import SignUp from "../pages/sign-up";
import SignIn from "../pages/sign-in";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/sign-up' component={SignUp}/>
            <Route path='/sign-in' component={SignIn}/>
            <PrivateRoute path="/admin-page" component={AdminPage} />
        </Switch>
    </BrowserRouter>
)