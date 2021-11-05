import React from 'react'
import './header.css'
import {Link} from "react-router-dom";

function header() {
    return (
        <div>
           <nav className="navbar" >
                <div className="content">
                    <div className="logo">
                        <Link to="/home">Efreix</Link>
                    </div>
                    <ul className="menu-list">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/vol">Vol</Link></li>
                        <li><Link to="/alaune">A la une</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/login">Log in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/Dashboard">Profil</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="banner"></div>
        </div>
    )
}

export default header
