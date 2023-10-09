import { useState } from 'react';
import './PhotosCarrousel.css';

const { REACT_APP_BACK } = process.env;

const WSPGallery = ({ images, sectionTitle }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div className='wspGallery'>
      {openModal && (
        <div className='sliderWrap'>
          <i
            className='fa-solid fa-xmark btnClose'
            onClick={handleCloseModal}
          ></i>
          <i className='fa-solid fa-arrow-left btnPrev' onClick={prevSlide}></i>
          <i
            className='fa-solid fa-arrow-right btnNext'
            onClick={nextSlide}
          ></i>
          <div className='fullScreenImage'>
            <img
              src={`${REACT_APP_BACK}/${sectionTitle.title}/${images[slideNumber].name}`}
              alt=''
            />
          </div>
        </div>
      )}

      <div className='galleryWrap'>
        {images &&
          images.map((image, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img
                  src={`${REACT_APP_BACK}/${sectionTitle.title}/${image.name}`}
                  alt={`imagen-${index}`}
                />
              </div>
            );
          })}
      </div>
      <h2>{sectionTitle?.title}</h2>
      <h3>{sectionTitle?.subtitle}</h3>
      <p>{sectionTitle?.p}</p>
    </div>
  );
};

export default WSPGallery;
