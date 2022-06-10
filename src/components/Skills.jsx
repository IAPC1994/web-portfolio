import React, { useState } from 'react';
import { SkillsItem } from './SkillsItem';
import { frontendSkills, backendSkills } from '../data/skills_list';

export const Skills = () => {

    const [accordionFrontend, setAccordionFrontend] = useState(false);
    const [accordionBackend, setAccordionBackend] = useState(false);

    const handleAccordionFrontend = () => {
        setAccordionFrontend(!accordionFrontend);
        if( !accordionFrontend ){
            document.getElementById('frontendSkills').classList.add('open__content');
            document.getElementById('frontend__skills').classList.add('open__list');
        }else{
            document.getElementById('frontendSkills').classList.remove('open__content');
            document.getElementById('frontend__skills').classList.remove('open__list');
        }
    }

    const handleAccordionBackend = () => {
        setAccordionBackend(!accordionBackend);
        if( !accordionBackend ){
            document.getElementById('backendSkills').classList.add('open__content');
            document.getElementById('backend__skills').classList.add('open__list');
        }else{
            document.getElementById('backendSkills').classList.remove('open__content');
            document.getElementById('backend__skills').classList.remove('open__list');
        }
    }

    return (
        <section id="skills" className='skills__section'>
            <div className='skills__title'>
                <h1>Skills</h1>
                <h4>My technical level</h4>
            </div>

            <div className='skills__container'>
                <div id='frontendSkills' className='skills__content'>
                    <h1>Frontend Developer</h1>
                    <div id="frontend__skills" className='list'>
                        {
                            frontendSkills.map( ({ title, percentage }) => (
                                <SkillsItem id='frontend' key={ title } title={ title } percentage={ percentage } />
                            ) )
                        }
                    </div>
                    <div className='skills__accordion' onClick={ () => handleAccordionFrontend() }>
                        <i className={ accordionFrontend? "fa-solid fa-angle-up" : "fa-solid fa-angle-down" }></i>
                    </div>
                </div>

                <div id='backendSkills' className='skills__content'>
                    <h1>Backend Developer</h1>
                    <div id="backend__skills" className='list'>
                    {
                        backendSkills.map( ({ title, percentage }) => (
                            <SkillsItem id='backend' key={ title } title={ title } percentage={ percentage } />
                        ) )
                    }
                    </div>
                    <div className='skills__accordion' onClick={ () => handleAccordionBackend() }>
                        <i className={ accordionBackend? "fa-solid fa-angle-up" : "fa-solid fa-angle-down" }></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
