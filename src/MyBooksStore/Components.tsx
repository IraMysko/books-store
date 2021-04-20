import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import News from './News';
import Contacts from './Contacts';
import Discount from './Discount';
import Catalogue from './Catalogue';
import NavBar from './NavBar';
import { Routs } from '../constants';


import './store.css';

const Components = () => {
    return (
        <div className='overall-container'>
            <Router>
                <NavBar />
                <Header />
                <Switch>
                    <Route path={Routs.Discount} component={Discount} />
                    <Route path={Routs.News} component={News} />
                    <Route path={Routs.Contacts} component={Contacts} />
                    <Route path={Routs.Catalogue} component={Catalogue} />
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default Components;