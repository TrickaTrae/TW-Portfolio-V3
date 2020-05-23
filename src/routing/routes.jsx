import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import Blog from '../pages/blog/blog';
import User from '../pages/user/user';
import AdminPage from '../pages/admin-page/admin-page';
import '../-global-styles/animations.css'

export default () => (
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/user' component={User}/>
            <PrivateRoute path='/admin-page' component={AdminPage} />
        </Switch>
    <Footer/>
    </BrowserRouter>
)