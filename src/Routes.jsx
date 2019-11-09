import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import AdminPage from "./pages/admin-page";
import SignUp from "./pages/sign-up";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/admin-page' component={AdminPage}/>
            <Route path='/sign-up' component={SignUp}/>
        </Switch>
    </BrowserRouter>
)