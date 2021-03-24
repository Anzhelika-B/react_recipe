import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='navbar-fixed'>
            <nav className='lime darken-2'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to='/' className='brand-logo'>
                            RecipeApp
                        </Link>

                        {/* <Link to="#" className="sidenav-trigger" data-target="mobile-menu">
                            <i className="material-icons">menu</i>
                        </Link> */}

                        <ul className='right hide-on-med-and-down'>
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

            {/* <ul className="sidenav" id="mobile-menu">
                <li>
                    <Link to='/about'>About</Link>
                </li>

                <li>
                    <Link to='/contacts'>Contacts</Link>
                </li>
            </ul> */}
            
        </div>
    );
}

export default Header;
