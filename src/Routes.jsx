import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./pages/home";
import AdminPage from "./pages/admin-page";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/admin-page' component={AdminPage}/>
        </Switch>
    </BrowserRouter>
)