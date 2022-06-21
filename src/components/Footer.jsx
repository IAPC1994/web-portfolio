import React from 'react';

export const Footer = () => {
    return (
        <footer className='footer__section'>
            <h1>IAPC Developer</h1>
            <div className='footer__nav'>
                <ul>
                    <li><a href="#home"><i className="fa-solid fa-house"></i> Home</a></li>
                    <li><a href="#about"><i className="fa-solid fa-user"></i> About</a></li>
                    <li><a href="#skills"><i className="fa-solid fa-chart-bar"></i> Skills</a></li>
                    <li><a href="#portfolio"><i className="fa-solid fa-suitcase"></i> Portfolio</a></li>
                    <li><a href="#contact"><i className="fa-solid fa-message"></i> Contact</a></li>
                </ul>
            </div>
            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/ivan-alejandro-panussis-conejeros/?locale=en_US" target={'_blank'} rel='noreferrer' style={{ fontSize: '2rem'}}><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/IAPC1994" target={'_blank'} rel='noreferrer' style={{ fontSize: '2rem'}}><i className="fa-brands fa-github"></i></a>
            </div>

            <div className='footer__copyright'>
                <p>
                    &copy; IAPC Developer. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
