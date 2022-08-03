import './Navbar.css';
import {Link} from 'react-router-dom';
import {Button} from '@chakra-ui/react'
import logo from './Images/empower..png';


// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, 'google_translate_element');
//     }
    
// function translateLanguage(lang) {
//     googleTranslateElementInit();
//     var $frame = $('.goog-te-menu-frame:first');
//     if (!$frame.size()) {
//         alert("Error: Could not find Google translate frame.");
//         return false;
//     }
//     $frame.contents().find('.goog-te-menu2-item span.text:contains(' + lang + ')').get(0).click();
//     return false;
// }

// $(function(){
//     $('.selectpicker').selectpicker();
// });



function Navbar() {

    return ( 
        <div>
            <nav className='navbar'>

                <img style = {{position: "absolute", left: "50px", top: "25px"}} src={logo} height={35} />

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

                        <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <Link className='link' to='/Locator'>Locator</Link>
                        </Button>

                        <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <Link className='link' to='/Donate'>Donate</Link>
                        </Button>

                        {/* <Button colorScheme='teal' variant='ghost' borderWidth='0px'>
                            <div id="google_translate_element"></div>
                        </Button> */}



                        {/* <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/Food-Resources'>Food Banks</Link>
                        <Link className='link' to='/Womens-Health'>Women's Health</Link>    
                        <Link className='link' to='/Locator'>Locator</Link>
                        <Link className='link' to='/Donate'>Donate</Link> */}



                    </ul>

                </div>
            </nav>
        </div>
    );
}

export default Navbar;