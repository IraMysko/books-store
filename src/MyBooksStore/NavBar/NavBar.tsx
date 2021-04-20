import React from 'react';
import { Link } from 'react-router-dom';
import { Routs } from '../../constants';

import './navbar.css';
import '../store.css';

const navBarList = [
    { title: 'Contacts', link: Routs.Contacts },
    { title: 'News', link: Routs.News },
    { title: 'Discount', link: Routs.Discount },
    { title: 'Catalogue', link: Routs.Catalogue },
]


const NavBar = () => {
    return (
        <div className='navbar-container'>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {navBarList.map(({ title, link }) => (
                            <Link key={title} className='navbar-link' to={link}>{title}</Link>

                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;