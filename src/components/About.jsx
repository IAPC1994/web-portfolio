import React from 'react';
import Img from '../assets/perfil.jpg';

export const About = () => {
    return (
        <section id="about" className='about__section'>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis praesentium amet aut. Optio unde tempore ut incidunt suscipit non perferendis quisquam, nihil minus officia odit necessitatibus dolor itaque quaerat. 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque distinctio natus architecto dolorum voluptas nemo dicta rerum sed. Adipisci officia atque dolorum nihil quidem ab ad non minima est vel.
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore iusto error suscipit repellat inventore impedit illum ullam vero saepe reprehenderit obcaecati quaerat porro, harum esse vitae dolorum temporibus perspiciatis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, numquam tempore. Aut nobis laborum corrupti culpa odio. Repellat, rerum animi, explicabo culpa doloribus mollitia voluptatem at nam ab officia vitae.
                        </p>
                    </div>
                </div>
            </div>
            
        </section> 
    )
}
