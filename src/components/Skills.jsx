import React from 'react';
import { SkillsItem } from './SkillsItem';
import { frontendSkills, backendSkills } from '../data/skills_list';

export const Skills = () => {
    return (
        <section id="skills" className='skills__section'>
            <div className='skills__title'>
                <h1>Skills</h1>
                <h4>My technical level</h4>
            </div>

            <div className='skills__container'>
                <div className='skills__content'>
                    <h1>Frontend Developer</h1>
                    {
                        frontendSkills.map( ({ title, percentage }) => (
                            <SkillsItem key={ title } title={ title } percentage={ percentage } />
                        ) )
                    }
                </div>

                <div className='skills__content'>
                    <h1>Backend Developer</h1>
                    {
                        backendSkills.map( ({ title, percentage }) => (
                            <SkillsItem key={ title } title={ title } percentage={ percentage } />
                        ) )
                    }
                </div>
            </div>
        </section>
    )
}
