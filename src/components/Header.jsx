import { Link } from "react-router-dom";


function Header() {
    return (    

        <div className="navbar-fixed">
        
            <nav className="#c0ca33 lime darken-1">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">RecipeApp</Link>
    
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to='/about'>About</Link>
                            </li>

                            <li>
                                <Link to='/contacts'>Contacts</Link>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
        </div>

   );
}

export default Header;