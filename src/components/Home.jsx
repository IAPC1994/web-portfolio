import React from 'react';
import Img from '../assets/profile-photo.png';

export const Home = () => {
    return (
        <section id="home" className='home__section spacer layer'>
            <div className='home__container'>
                <div className='home__content'>
                    <div className='home__title'>
                        <div className='home__title-name'>
                            <h2 className='animate__animated animate__fadeInLeftBig animate__slower'>I'm Iván Panussis</h2>
                        </div>
                        <div className='home__title-jobname'>
                            <h5 className='animate__animated animate__fadeInLeftBig animate__delay-2s animate__slower'>Software Engineer</h5>
                        </div>
                        <br /> <hr className='animate__animated animate__fadeIn animate__delay-2s animate__slower'/>
                    </div>   
                </div>

                <div className='home__image'>
                    <div className='home__image-profile animate__animated animate__fadeIn animate__slower'>
                        <img src={ Img } alt="profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}
