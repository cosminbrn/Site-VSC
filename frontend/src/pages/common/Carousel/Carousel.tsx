import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Carousel.scss';


interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: SlideData[];
  variant?: 'full' | 'mini';
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, variant = 'full' }) => {
  return (

    <div className={`hero-carousel ${variant === 'mini' ? 'hero-mini' : ''}`}>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={'fade'}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div 
                className="slide-bg" 
                style={{ backgroundImage: `url(${slide.image})` }} 
              />
              <div className="overlay"></div>
              <div className="text-container">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                
                {variant === 'full' && (
                  <a href="#contact" className="cta-button">Cere Ofertă</a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;