import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../img/logo.png"
import "./menu.css"

const Menu = () => {
    return (
        < nav className = 'navigation' >
            <div className='logo'>
               < img src = {Logo} alt = ""/>
            </div>
            <div className='menu-items'>
               <Link className='link' to="/">HOME</Link>
               < Link className='link' to = "/reviews" > REVIEWS </Link>
               < Link className='link' to = "/dashboard" > DASHBOARD </Link>
               < Link className='link' to = "/blogs" > BLOGS </Link>
               < Link className='link' to = "/about" > ABOUT </Link>
            </ div>
        </nav>
    );
};

export default Menu;