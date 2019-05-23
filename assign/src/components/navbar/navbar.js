import React from 'react';
import './navbar.scss';

import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/assign1" className="blh" >Assignment 1</NavLink>
            <NavLink to="/assign2" className="blh" >Assignment 2</NavLink>
        </nav>
    );
}

export default navbar;