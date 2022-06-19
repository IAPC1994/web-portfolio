import React from 'react';

export const PortfolioItem = ({ title, image, github, demo }) => {
    return (
        <div className='portfolio__item'>
            <div className='portfolio__item-title'>
                <h3>{ title }</h3>
            </div>
            <div className='portfolio__item-image'>
                <img src={ image } alt={ image } />
            </div>
            <div className='portfolio__item-buttons'>
                <button onClick={() => window.open(github,'_blank')}>GitHub</button>
                <button onClick={() => window.open(demo,'_blank')}>Demo</button>
            </div>
        </div>
    )
}
