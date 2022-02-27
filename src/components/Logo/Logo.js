import Tilt from 'react-parallax-tilt';
import brain from './brain.png'

const Logo = ()=>{
    return(
        <div className="ma4 mt0">
            <Tilt>
                <div className='Tilt br2 shadow-2' options={{max : 55}} style={{ width: '150px', height: '150px' }}>
                    <div className="pa3">
                        <img src={brain} alt="brian logo" />
                    </div>
                </div>
           </Tilt>
        </div>
    );
}

export default Logo