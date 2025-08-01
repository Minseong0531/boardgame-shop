import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';
import { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import './MainBanner.css';
import 'swiper/css/pagination';


const bannerImages = [
  {src:'/image/banner/main_banner1.jpg'},
  {src:'/image/banner/main_banner2.jpg'},
  {src:'/image/banner/main_banner3.jpg'},
  {src:'/image/banner/main_banner4.jpg'},
]

function MainBanner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
            scale: [0.9, 1.3],
            opacity: 0.8, 
          },
          next: {
            shadow: true,
            translate: ['100%', 0, 1],
            scale: [1, 0.9],
            opacity: 1,
          },
        }}
        modules={[EffectCreative, Autoplay, Pagination]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'progressbar',
        }}
        className='mySwiper'
      >

        {bannerImages.map((image,idx) => (
          <SwiperSlide key={idx}>
            <div style={{background: `linear-gradient(to bottom, rgba(0,0,0,1), transparent 50%, transparent 50%, rgba(0,0,0,1))`, width:'100%', height:'100%'}}>
              <img src={image.src} alt={`Slide ${idx + 1}`} className="slide-image" />
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
      </Swiper>
    </div>
  );
}

export default MainBanner;