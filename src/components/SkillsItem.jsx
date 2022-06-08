import React from 'react';

export const SkillsItem = ({ title, percentage }) => {
    return (
        <div className='skills__list'>
            <div className='skills__content-title'>
                <span>{ title }</span>
                <span>{ percentage }%</span>
            </div>
            <div className='skills__percentage'>
                <div className='skills__level' style={{ width: percentage+'%' }}></div>
            </div>
        </div>
    )
}
