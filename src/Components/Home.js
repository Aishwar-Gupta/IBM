import './Home.css'
import Poverty_Meaning from './Videos/Poverty_Meaning.mp4'

function Home() {
    return (  
        <div>
            <video  className='video_playback' src={Poverty_Meaning} type='video/mp4' autoPlay loop muted></video>
        </div>
    );
}

export default Home;