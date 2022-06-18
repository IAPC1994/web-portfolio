import React from 'react';

export const PortfolioItem = ({ title, image, github, demo }) => {
    return (
        <div className='portfolio__item'>
            <h1>{ title }</h1>
        </div>
    )
}
