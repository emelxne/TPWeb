import React from 'react'
import './footer.css'
import {BrowserRouter as Link} from "react-router-dom";
function footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">Something</h1>
                        
                    <h2>Contact</h2>
                    
                    <address>
                    30-32 Av. de la République, 94800 Paris
                        
                    <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>
                
                <ul className="footer__nav">
                    <li className="nav__item">
                    <h2 className="nav__title">Legal</h2>
                    
                    <ul className="nav__ul">
                        <li>
                        <Link to="/faq">Privacy Policy</Link>
                        </li>
                        
                        <li>
                        <Link to="/faq">Terms of Use</Link>
                        </li>
                        
                        <li>
                        <Link to="/faq">Sitemap</Link>
                        </li>
                    </ul>
                    </li>
                </ul>
                
                <div className="legal">
                    <p>&copy; 2021 Gärtner and emxline. All rights reserved.</p>
                    
                    <div className="legal__links">
                    <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
                    </div>
                </div>
            </footer>  
        </div>
    )
}
export default footer
