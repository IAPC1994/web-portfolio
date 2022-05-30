import React from 'react';
import Img from '../assets/logo512.png';

export const Navbar = () => {

    const linkClicked = (link) => {

        const home = document.getElementById('homeLink');
        const about = document.getElementById('aboutLink');
        const skills = document.getElementById('skillsLink');
        const portfolio = document.getElementById('portfolioLink');
        const contact = document.getElementById('contactLink');

        switch(link){
            case 'home':
                home.classList.add('active');
                about.classList.remove('active');
                skills.classList.remove('active');
                portfolio.classList.remove('active');
                contact.classList.remove('active');
                break;
            case 'about':
                about.classList.add('active');
                home.classList.remove('active');
                skills.classList.remove('active');
                portfolio.classList.remove('active');
                contact.classList.remove('active');
                break;
            case 'skills':
                skills.classList.add('active');
                home.classList.remove('active');
                about.classList.remove('active');
                portfolio.classList.remove('active');
                contact.classList.remove('active');
                break;
            case 'portfolio':
                portfolio.classList.add('active');
                home.classList.remove('active');
                skills.classList.remove('active');
                about.classList.remove('active');
                contact.classList.remove('active');
                break;
            case 'contact':
                contact.classList.add('active');
                home.classList.remove('active');
                skills.classList.remove('active');
                portfolio.classList.remove('active');
                about.classList.remove('active');
                break;

            default:
                break;

        }
    }

    return (
        <div className="nav__container">
             <nav className='nav'>
                <div className='nav__logo'>
                    <img src={ Img } className="nav__logo-img" alt='logo'/>
                    <h1>IAPC Developer</h1>
                </div>
                <ul className='nav__ul'>
                    <li><a id="homeLink" href="#home" className='active' onClick={ () => linkClicked('home') } ><i className="fa-solid fa-house"></i> Home</a></li>
                    <li><a id="aboutLink" href="#about" onClick={ () => linkClicked('about') } ><i className="fa-solid fa-user"></i> About</a></li>
                    <li><a id="skillsLink" href="#skills" onClick={ () => linkClicked('skills') }><i className="fa-solid fa-chart-bar"></i> Skills</a></li>
                    <li><a id="portfolioLink" href="#portfolio" onClick={ () => linkClicked('portfolio') }><i className="fa-solid fa-suitcase"></i> Portfolio</a></li>
                    <li><a id="contactLink" href="#contact" onClick={ () => linkClicked('contact') }><i className="fa-solid fa-message"></i> Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/ivan-alejandro-panussis-conejeros/?locale=en_US" target={'_blank'} rel='noreferrer' style={{ fontSize: '1.5rem'}}><i className="fa-brands fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/IAPC1994" target={'_blank'} rel='noreferrer' style={{ fontSize: '1.5rem'}}><i className="fa-brands fa-github"></i></a></li>
                </ul>

            </nav>
        </div>
    );
}
