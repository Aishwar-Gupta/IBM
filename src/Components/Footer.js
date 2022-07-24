import './Footer.css'

function Footer() {
    return ( 
        <div>
            <div className="Footer">
                <table className='table'>
                    <tr className='table-header'>
                        <td>Contact US</td>
                        <td>Helpful Links</td>
                    </tr>
                    <tr>
                        <td>
                            <a className='link' href=''> Facebook</a>
                        </td>
                        <td>
                            <a className='link' href="https://www.benefits.gov/" target='_blank'>USA - Govt. Benefits</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a className='link' href=''>Instagram</a>
                        </td>
                        <td>
                            <a className='link' href="https://www.apa.org/topics/crisis-hotlines" target='_blank'>USA - Crisis Hotlines</a>
                        </td>
                    </tr>
                    <ul>
                        
                    </ul>
                </table>
                
            </div>
        </div> 
        
    );
}

export default Footer;
