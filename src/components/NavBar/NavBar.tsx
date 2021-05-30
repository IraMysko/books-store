import React from 'react';
import { Link } from 'react-router-dom';

import { Routes } from '../../constants';
import './navbar.css';

const navBarList = [
    { id: 1, title: 'Contacts', link: Routes.Contacts },
    { id: 2, title: 'News', link: Routes.News },
    { id: 3, title: 'Discount', link: Routes.Discount },
    { id: 4, title: 'Catalogue', link: Routes.Catalogue },
];

const NavBar: React.FC = () => {
    return (
        <div className='navbar-container'>
            <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {navBarList.map(({ id, title, link }) => (
                            <Link key={id} className='navbar-link' to={link}>{title}</Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;