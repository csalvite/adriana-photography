import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
const { REACT_APP_BACK } = process.env;

export const SwiperKeyControl = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className='swiper-stills'
        // loop={true}
      >
        {images.map((image) => {
          return (
            <SwiperSlide className='swiper-slide'>
              <img
                key={image.id}
                className='swiper-item'
                src={`${REACT_APP_BACK}/stills/${image.name}`}
                alt={`Stills ${image.id}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
