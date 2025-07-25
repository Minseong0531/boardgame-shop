import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function MainBanner(){
    return(
        
        <div id="main-banner">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/image/banner/banner1.jpg" alt="배너1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/banner/banner2.jpg" alt="배너2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/banner/banner3.jpg" alt="배너3" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainBanner;