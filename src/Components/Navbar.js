import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

    return ( 
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className='menu-items'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/Food-Resources'>Food Banks</Link>
                        <Link className='link' to='/Womens-Health'>Women's Health</Link>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;