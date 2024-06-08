import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';



import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'


import './Testimonials.css'
const Testimonials = () => {

    const images = [img1,img2, img3, img4, img5,]


  return (
      <div>
          <h3 className="lg:text-3xl text-center font-bold m-8 text-black">
              Testimonials and Reviews
          </h3>
          <div className='container'>
              <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={'auto'}
                  coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 2.5,
                  }}
                  pagination={{ el: '.swipper-pagination', clickable: true }}
                  navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                      clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper-container "
              >
                  {images.map((image, index) => (
                      <SwiperSlide>
                          <img src={image} alt="silde-image" />
                      </SwiperSlide>
                  ))}

                  <div className="slider-controler">
                      <div className="swiper-button-prev slider-arrow">
                          <ion-icon name="arrow-back-outline"></ion-icon>
                      </div>
                      <div className="swiper-button-next slider-arrow">
                          <ion-icon name="arrow-forward-outline"></ion-icon>
                      </div>
                      <div className="swiper-pagination"></div>
                  </div>
              </Swiper>
          </div>
      </div>
  )
}

export default Testimonials
