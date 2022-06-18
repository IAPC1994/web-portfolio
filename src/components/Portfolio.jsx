import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { PortfolioItem } from './PortfolioItem';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Portfolio = () => {
    return (
        <section id="portfolio" className='portfolio__section'>
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
                         className="mySwiper"
                    >
                        <SwiperSlide> 
                            <PortfolioItem title={"Project Name 1"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <PortfolioItem title={"Project Name 2"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <PortfolioItem title={"Project Name 3"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <PortfolioItem title={"Project Name 4"} demo={"https://www.google.com"} github={"https://www.google.com"} image={"image.path"}/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
