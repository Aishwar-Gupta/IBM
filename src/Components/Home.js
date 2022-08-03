import './Home.css'
import Poverty_Meaning from './Videos/Poverty_Meaning.mp4'
import stat from './Images/stat_pov.png';


function Home() {
    return (  
        <div>

            <img className='image' src={stat}></img>

       


            {/* <video  className='video_playback' src={Poverty_Meaning} type='video/mp4' autoPlay loop muted></video> */}
        </div>
    );
}

export default Home;