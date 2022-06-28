import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { PortfolioItem } from './PortfolioItem';
import { portfolioItems } from './../data/portfolio_items';

export const Portfolio = () => {
    return (
        <section id="portfolio" className='portfolio__section spacer layer'>
            <div className='portfolio__container'>
                <h5>My personal work experience</h5>
                <h1>Portfolio</h1>
                <div className='portfolio__content'>
                    <Swiper
                         slidesPerView={3}
                         spaceBetween={20}
                         loop={false}
                         pagination={{
                           clickable: true,
                         }}
                         navigation={true}
                         modules={[Pagination, Navigation]}
                         breakpoints={{
                            320:{
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            375:{
                                slidesPerView: 1,
                                spaceBetween: 15
                            },
                            425:{
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768:{
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            1024:{
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1440:{
                                slidesPerView: 3,
                                spaceBetween: 20
                            }                        
                         }}
                         className="mySwiper"
                    >
                        {
                            portfolioItems.map( ({ title, github, demo, image }) => (
                                <SwiperSlide key={ title }> 
                                    <PortfolioItem title={ title } github={ github } image={ image } demo={ demo } />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
