import React from 'react'
import './footer.css'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function footer() {
    return (
        <div>
            <footer class="footer">
                <div class="footer__addr">
                    <h1 class="footer__logo">Something</h1>
                        
                    <h2>Contact</h2>
                    
                    <address>
                    30-32 Av. de la République, 94800 Paris
                        
                    <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>
                
                <ul class="footer__nav">
                    <li class="nav__item">
                    <h2 class="nav__title">Legal</h2>
                    
                    <ul class="nav__ul">
                        <li>
                        <Link to="">Privacy Policy</Link>
                        </li>
                        
                        <li>
                        <Link to="">Terms of Use</Link>
                        </li>
                        
                        <li>
                        <Link to="">Sitemap</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                
                <div class="legal">
                    <p>&copy; 2021 Gärtner and emxline. All rights reserved.</p>
                    
                    <div class="legal__links">
                    <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
                    </div>
                </div>
            </footer>  
        </div>
    )
}
export default footer
