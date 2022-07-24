import './Womens_Health.css';
import image from './Images/Background_Home.jpg';
import image1 from './Images/pic_of_health.png';

function Womens_Health() {
    return (  
        //put yo code inside div, dont need to reload page
        <div className='print'>
            <h1 className = 'women_health_center'>Women's Health</h1>
            <h3 className='abc'><b>Here are some resources for women for various situations ranging from birth control,
                abortions, pregnancy, and more. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b></h3>
            {/*<img className='image' src={image}></img>*/}

            <h2 className = 'abcd'> Birth Control</h2>

            <h2 className = 'abcd'> Sexually Transmitted Diseases</h2>
            
            <h2 className = 'abcd'> Abortions </h2>

            <h2 className = 'abcd'> Caregiving</h2>

            <h2 className = 'abcd'> Pregnancy</h2>

            <h2 className = 'abcd'> Mental Health Support</h2>
            
            <img className='image' src={image1}></img>

        </div>
        //can only return one div
    );
}

export default Womens_Health;