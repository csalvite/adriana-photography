import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './PhotosCarrousel.css';

const PhotoCarousel = ({ photos }) => {
  const maxSize = {
    width: '400px',
    height: '300px',
  };

  return (
    <div className='container-photos'>
      <h2>Título de la colección de fotos</h2>

      <Carousel
        className='carousel-photos'
        style={maxSize}
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
      >
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`IdPhoto-${index}`} className='photos' />
          </div>
        ))}
      </Carousel>

      <h3>Trabajo de moda</h3>
      <p>Con fecha de 02/10/2022</p>
    </div>
  );
};

export default PhotoCarousel;
