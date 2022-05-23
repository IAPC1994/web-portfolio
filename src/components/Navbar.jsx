import React from 'react';
import Img from '../assets/logo512.png';

export const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__logo'>
                <img src={ Img } className="nav__logo-img" alt='logo'/>
                <h1>IAPC Developer</h1>
            </div>
            <ul className='nav__ul'>
                <li><a href="#home"><i className="fa-solid fa-house"></i> Home</a></li>
                <li><a href="#about"><i className="fa-solid fa-user"></i> About</a></li>
                <li><a href="#skills"><i className="fa-solid fa-chart-bar"></i> Skills</a></li>
                <li><a href="#portfolio"><i className="fa-solid fa-suitcase"></i> Portfolio</a></li>
                <li><a href="#contact"><i className="fa-solid fa-message"></i> Contact</a></li>
            </ul>

            <div className="nav__socials">
                <a href="https://www.linkedin.com/in/ivan-alejandro-panussis-conejeros/?locale=en_US" target={'_blank'} rel='noreferrer' ><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/IAPC1994" target={'_blank'} rel='noreferrer'><i className="fa-brands fa-github"></i></a>
            </div>

        </nav>
    );
}
