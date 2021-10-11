import React from 'react'
import './header.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function header() {
    return (
        <div>
           <nav class="navbar">
                <div class="content">
                    <div class="logo">
                        <a href="#">Efreix</a>
                    </div>
                    <ul class="menu-list">
                        
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/panier">Panier</Link></li>
                        <li><Link to="/shopping">Shopping</Link></li>
                        <li><Link to="/pay">Pay</Link></li>
                        <li><Link to="/faq">F.A.Q</Link></li>
                    </ul>
                    <ul class="menu-list">
                        <li><Link to="/login">Sign in</Link></li>
                        <li><Link to="/login">Sign up</Link></li>
                    </ul>
                </div>
            </nav>
            <div class="banner"></div>
        </div>
    )
}




export default header
