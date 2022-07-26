import './Navbar.css';
import {Link} from 'react-router-dom';
import {Button} from '@chakra-ui/react'


function Navbar() {

    return ( 
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <ul className='menu-items'>

                        <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <Link className='link' to='/'>Home</Link>
                        </Button>

                        <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <Link className='link' to='/Food-Resources'>Food Banks</Link>
                        </Button>

                        <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <Link className='link' to='/Womens-Health'>Women's Health</Link>
                        </Button>
                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;