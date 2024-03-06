import './PhotosCarrousel.css';
import Reveal from '../Reveal';

const { REACT_APP_BACK } = process.env;

const WSPGallery = ({ images, sectionTitle, onClick }) => {
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
