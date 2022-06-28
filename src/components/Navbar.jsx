import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
// import Img from '../assets/logo512.png';

export const Navbar = () => {

    const [toggle, setToggle] = useState(true);

    const handleToggle = () => {
        if(toggle)
            document.getElementById("nav__main").classList.add("open");
        else
            document.getElementById("nav__main").classList.remove("open");        
        setToggle(!toggle);
    }

    return (
        <div id="nav__main" className="nav__container">
             <nav className='nav'>
                <div className='nav__logo'>
                    {/* <img src={ Img } className="nav__logo-img" alt='logo'/> */}
                    <h1>IAPC DevCode</h1>
                </div>
                <ul className='nav__ul'>
                    <li><NavLink to='/' style={({ isActive }) => { return { color: isActive ? "#6246EA" : ""}} }>Home</NavLink></li>
                    <li><NavLink to='/about' style={({ isActive }) => { return { color: isActive ? "#6246EA" : ""}} }>About</NavLink></li>
                    <li><NavLink to='/skills' style={({ isActive }) => { return { color: isActive ? "#6246EA" : ""}} }>Skills</NavLink></li>
                    <li><NavLink to='/portfolio' style={({ isActive }) => { return { color: isActive ? "#6246EA" : ""}} }>Portfolio</NavLink></li>
                    <li><NavLink to='/contact' style={({ isActive }) => { return { color: isActive ? "#6246EA" : ""}} }>Contact</NavLink></li>
                </ul>
                <div className='nav__socials'>
                    <a href="https://www.linkedin.com/in/ivan-alejandro-panussis-conejeros/?locale=en_US" target={'_blank'} rel='noreferrer' style={{ fontSize: '1.2rem'}}><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/IAPC1994" target={'_blank'} rel='noreferrer' style={{ fontSize: '1.2rem'}}><i className="fa-brands fa-github"></i></a>
                </div>
                <div className='nav__toggle'>
                    <button style={{ 'display': toggle? 'block' : 'none' }} onClick={ () => handleToggle() }><i className="fa-solid fa-bars"></i></button>
                    <button style={{ 'display': toggle? 'none' : 'block' }} onClick={ () => handleToggle() }><i className="fa-solid fa-xmark"></i></button>
                </div>
            </nav>
        </div>
    );
}
