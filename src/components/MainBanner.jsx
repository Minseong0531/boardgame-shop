import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import './MainBanner.css';

const bannerImages = [
  {src:'/image/banner/main_banner1.jpg'},
  {src:'/image/banner/main_banner2.jpg'},
  {src:'/image/banner/main_banner3.jpg'},
  {src:'/image/banner/main_banner4.jpg'},
]


function MainBanner() {
  return (
    <div className="main-banner">
      <Swiper
        speed={1500}
        grabCursor={true} 
        effect={'creative'}
        loop={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-10%', 0, 0],
            opacity: 1, 
          },
          next: {
            shadow: true,
            translate: ['100%', 0, 1],
            opacity: 1,
          },
        }}
        modules={[EffectCreative]}
        className='mySwiper'
      >

        {bannerImages.map((image,idx) => (
          <SwiperSlide key={idx}>
            <div>
              <img src={image.src} alt={`Slide ${idx + 1}`} className="slide-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MainBanner;