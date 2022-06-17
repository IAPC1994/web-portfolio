import React from 'react';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
    return (
        <section id="portfolio" className='portfolio__section'>
            <div className='portfolio__container'>
                <h5>My personal work experience</h5>
                <h1>Portfolio</h1>
                <div className='portfolio__content'>
                    <PortfolioItem title={"Project Name"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                    <PortfolioItem title={"Project Name"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                    <PortfolioItem title={"Project Name"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                </div>
            </div>
        </section>
    )
}
