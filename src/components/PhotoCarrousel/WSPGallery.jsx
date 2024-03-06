import { useEffect, useRef, useState } from 'react';
import './PhotosCarrousel.css';
import Reveal from '../Reveal';

const { REACT_APP_BACK } = process.env;

export const useKey = (key, callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handle(e) {
      if (e.code === key) {
        callbackRef.current(e);
      }
    }

    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keypress', handle);
  }, [key]);
};

const WSPGallery = ({ images, sectionTitle, onClick }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  function handleKeySlideImageNext() {
    if (openModal) {
      nextSlide();
    }
  }

  function handleKeySlideImagePrev() {
    if (openModal) {
      prevSlide();
    }
  }

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

  // Keys refs
  useKey('ArrowRight', handleKeySlideImageNext);
  useKey('ArrowLeft', handleKeySlideImagePrev);
  useKey('Escape', handleCloseModal);

  return (
    <div className='wspGallery'>
      <div className='galleryWrap'>
        {images &&
          images.map((image, index) => {
            return (
              <Reveal key={index} delay={0.25 + index / 10}>
                <div
                  className='single'
                  key={index}
                  // onClick={() => handleOpenModal(index)}
                  onClick={onClick}
                >
                  <img
                    src={`${REACT_APP_BACK}/${sectionTitle.title}/${image.name}`}
                    alt={`imagen-${index}`}
                  />
                </div>
              </Reveal>
            );
          })}
      </div>
      <div className='galleryTitles'>
        <h2>{sectionTitle?.subtitle}</h2>
        {sectionTitle?.p !== undefined && <p>{sectionTitle?.p}</p>}
      </div>
    </div>
  );
};

export default WSPGallery;
