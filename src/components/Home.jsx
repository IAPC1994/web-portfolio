import React from 'react';
import Img from '../assets/perfil.jpg';

export const Home = () => {
    return (
        <section id="home" className='home__section'>

            <div className='home__content'>
                <div className='home__container'>
                    <div>
                        <h1><a href="#about">Iván Alejandro Panussis Conejeros</a></h1>
                        <br/>    
                        <p>Hi, I am a professional Frontend and Backend developer. I have four years experience in IT Sector as a developer of web &amp; mobile applications.</p>
                    </div>      
                              
                    <h5><a href='#contact'><i className="fa-solid fa-message"></i> Hire Me</a></h5>
                </div>

                <div className='home__img'>
                    <img src={ Img } alt="profile_photo"/>
                </div>
            </div>
           

            {/* <div className='home__button'>
                <button><i className="fa-solid fa-download"></i>  Download CV</button>
                <button><i className="fa-solid fa-message"></i>  Contact me</button>
            </div> */}
        </section>
    )
}
