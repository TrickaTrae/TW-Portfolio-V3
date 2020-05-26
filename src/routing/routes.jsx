import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Home from '../pages/home/home';
import Contact from '../pages/contact/contact';
import Blog from '../pages/blog/blog';
import User from '../pages/user/user';
import Admin from '../pages/admin/admin';
import '../-global-styles/animations.css'
import '../-global-styles/styles.css';

export default () => (
    <BrowserRouter>
    <NavBar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/user' component={User}/>
            <Route path='/admin' component={Admin} />
        </Switch>
    <Footer/>
    </BrowserRouter>
)