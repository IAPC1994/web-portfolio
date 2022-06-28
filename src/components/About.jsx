import React from 'react';
import Img from '../assets/perfil.jpg';

export const About = () => {
    return (
        <section id="about" className='about__section spacer layer'>
            <div className='about__title'>
                <h5>Get to Know</h5>
                <h1>About Me</h1>
            </div>

            <div className='about__container'>
                <div className='about__image'>
                    <div className='image__container'>
                        <img src={ Img } alt="profile_photo"/>
                    </div>
                </div>
                <div className='about__description'>
                    <div className='about__achievements'>
                        <div>
                            <i className="fa-solid fa-award"></i>
                            <p>Experience</p>
                            <small>+3 Years</small>
                        </div>
                        <div>
                            <i className="fa-solid fa-medal"></i>
                            <p>Courses</p>
                            <small>+7 Courses</small>
                        </div>
                        <div>
                            <i className="fa-solid fa-suitcase"></i>
                            <p>Projects</p>
                            <small>+3 Projects</small>
                        </div>
                    </div>
                    
                    <div className='about__me border'>
                        <p> 
                            I'am a Frontend Developer with more than 3 years of experience 
                            developing web and mobile applications. Implementing CI/CD, 
                            using agile methodologies (SCRUM). 
                        </p>
                        <br/>
                        <p>
                            In my first years I used Java with Primefaces 
                            and a bit of Spring Boot framework. I'm currently practicing my skills with the 
                            MERN stack (<strong>M</strong>ongo, <strong>E</strong>xpress, <strong>R</strong>eact, <strong>N</strong>ode JS) and doing courses on this same.
                            I'm a professional looking for more challenges and new knowledge in current technologies.
                            I like do teamwork and keep my code clean and tested. 
                        </p>
                        <br/>
                        <p>
                            You can find some project on my GitHub or <a href="#portfolio">here</a>.
                        </p>
                    </div>
                </div>
            </div>
            
        </section> 
    )
}
