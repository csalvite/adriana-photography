import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';
const { REACT_APP_BACK } = process.env;

export const SwiperKeyControl = ({
  images,
  sectionTitle = { title: 'stills' },
}) => {
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
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} className='swiper-slide'>
              <img
                key={index}
                className='swiper-item'
                src={`${REACT_APP_BACK}/${sectionTitle.title}/${image.name}`}
                alt={`Stills ${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
