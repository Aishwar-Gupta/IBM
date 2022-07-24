import './Womens_Health.css';
import image from './Images/Background_Home.jpg';

function Womens_Health() {
    return (  
        <div className='print'>
            <h1>Womens Health goes here</h1>
            <p className='abc'>Women should care for themselves</p>
            <img className='image' src={image}></img>
        </div>
    );
}

export default Womens_Health;