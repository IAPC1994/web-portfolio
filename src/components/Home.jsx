import React from 'react';
import Img from '../assets/profile-photo.png';

export const Home = () => {
    return (
        <section id="home" className='home__section spacer layer'>
            <div className='home__container'>
                <div className='home__content'>
                    <div className='home__title'>
                        <div className='home__title-name'>
                            <h2>I'm Iván Panussis</h2>
                        </div>
                        <div className='home__title-jobname'>
                            <h5>Software Engineer</h5>
                        </div>
                        <br /> <hr />
                    </div>   
                </div>
                
                <div className='home__image'>
                    <div className='home__image-profile'>
                        <img src={ Img } alt="profile" />
                    </div>
                </div>
            </div>
        </section>
    )
}
