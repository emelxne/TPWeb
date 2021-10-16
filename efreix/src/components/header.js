import React from 'react'
import './header.css'
import {BrowserRouter as Link} from "react-router-dom";

function header() {
    return (
        <div>
           <nav className="navbar">
                <div className="content">
                    <div className="logo">
                        <Link to="/home">Efreix</Link>
                    </div>
                    <ul className="menu-list">
                        
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/vol">Vol</Link></li>
                    </ul>
                    <ul className="menu-list">
                        <li><Link to="/login">Sign in</Link></li>
                        <li><Link to="/login">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="banner"></div>
        </div>
    )
}




export default header
