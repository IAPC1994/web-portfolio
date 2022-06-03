import React from 'react';
import Img from '../assets/perfil.jpg';

export const Home = () => {
    return (
        <section id="home" className='home__section'>
            <div className='home__container'>
                <h3>Hello World!</h3>
                <h1>I'm <a href="#about">Iván Panussis</a></h1>
                <h5>Frontend Developer</h5>
            </div>

            <div className='home__img'>
                <img src={ Img } alt="profile_photo"/>
            </div>

            <div className='home__button'>
                <button><i className="fa-solid fa-download"></i>  Download CV</button>
                <button><i className="fa-solid fa-message"></i>  Contact me</button>
            </div>
        </section>
    )
}
