import React from 'react';
import Notfound from "../../img/404.jpg"
import "./notfound.css"
import {
    Link
} from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={Notfound} alt="" />
< p >
                <button>
                    < Link className = 'text-decoration-none text-white'
                    to = "/home" > GO TO HOME PAGE </Link>
                </button>
           </p>

        </div>
    );
};

export default NotFound;